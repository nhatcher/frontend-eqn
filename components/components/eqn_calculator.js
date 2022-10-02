import './eqn_button.js';
import './eqn_display.js';

import calculate from './calculate.js';

class EqnCalculator extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <eqn-display></eqn-display>
            <div>
                <div class="calc-row">
                    <eqn-button data-type="strong">(</eqn-button>
                    <eqn-button data-type="strong">)</eqn-button>
                    <eqn-button data-type="strong">%</eqn-button>
                    <eqn-button data-type="strong">AC</eqn-button>
                </div>
                <div class="calc-row">
                    <eqn-button data-type="normal">7</eqn-button>
                    <eqn-button data-type="normal">8</eqn-button>
                    <eqn-button data-type="normal">9</eqn-button>
                    <eqn-button data-type="strong">/</eqn-button>
                </div>
                <div class="calc-row">
                    <eqn-button data-type="normal">4</eqn-button>
                    <eqn-button data-type="normal">5</eqn-button>
                    <eqn-button data-type="normal">6</eqn-button>
                    <eqn-button data-type="strong">x</eqn-button>
                </div>
                <div class="calc-row">
                    <eqn-button data-type="normal">1</eqn-button>
                    <eqn-button data-type="normal">2</eqn-button>
                    <eqn-button data-type="normal">3</eqn-button>
                    <eqn-button data-type="strong">-</eqn-button>
                </div>
                <div class="calc-row">
                    <eqn-button data-type="normal">0</eqn-button>
                    <eqn-button data-type="normal">.</eqn-button>
                    <eqn-button data-type="equals">=</eqn-button>
                    <eqn-button data-type="strong">+</eqn-button>
                </div>
            </div>
        `;

        const eqnDisplay = wrapper.getElementsByTagName('eqn-display')[0];
        wrapper.addEventListener('click', (event) => {
            console.log(event, event.target);
            if (event.target.tagName.toLowerCase() === 'eqn-button') {
                console.log('Hola');
                const wholeText = eqnDisplay.getAttribute('data-text');
                const text = calculate(event.target.textContent, wholeText);
                console.log(event.target.textContent, wholeText);
                eqnDisplay.setAttribute('data-text', text);
            };
        });

        const style = document.createElement('style');
        style.textContent = `
            .calc-row {
                display: flex;
                flex-direction: row;
            }

            eqn-button + eqn-button {
                margin-left: 10px;
            }
            
            .calc-row + .calc-row {
                margin-top: 10px;
            }
        `;
        
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

customElements.define('eqn-calculator', EqnCalculator);

export default EqnCalculator;