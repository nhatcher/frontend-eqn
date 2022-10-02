class EqnDisplay extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        
        const wrapper = document.createElement('div');
        this.wrapper = wrapper;
        
        this.setAttribute('data-text', '');

        const style = document.createElement('style');
        style.textContent = `
            div {
                display: flex;
                width: 230px;
                height: 50px;
                border: 1px solid grey;
                background-color: aliceblue;
                margin-bottom: 10px;
                align-items: center;
                font-size: 20px;
                padding: 5px;
                box-sizing: border-box;
                flex-direction: row-reverse;
            }
        `;
        
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }

    attributeChangedCallback(name, _oldValue, newValue) {
        if (name === 'data-text') {
            this.wrapper.innerText = newValue;
        }
    }

    static get observedAttributes() { return ['data-text']; }

}

customElements.define('eqn-display', EqnDisplay);
