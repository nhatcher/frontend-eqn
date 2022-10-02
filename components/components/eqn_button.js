const buttonStyles = {
    normal: {
        background: '#04d88a',
        color: '#007C63'
    },
    strong: {
        background: '#03a578',
        color: '#b5ffe4'
    },
    equals: {
        background: '#f1b707',
        color: '#007c63'
    }
}

class EqnButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        
        const wrapper = document.createElement('span');
        wrapper.textContent = this.textContent;

        const buttonStyle = buttonStyles[this.getAttribute('data-type')];
        
        const style = document.createElement('style');
        style.textContent = `
            span {
                display: flex;
                width: 50px;
                height: 50px;
                border-radius: 3px;
                justify-content: center;
                align-items: center;
                background-color: ${buttonStyle.background};
                color: ${buttonStyle.color};
            }
        `;
        
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
    
}

customElements.define('eqn-button', EqnButton);
