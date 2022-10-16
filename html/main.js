import calculate from './calculator.js'

function setUpWindow() {
    const caculator = document.getElementById('calculator');
    const display = document.getElementById('eqn-display');
    caculator.addEventListener('click', (event) => {
        if (event.target.classList.contains('eqn-button')) {
            const wholeText = display.innerText;
            const text = calculate(event.target.innerText, wholeText);
            display.innerText = text;

        };
    });
}

export default setUpWindow;