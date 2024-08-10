let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

// Add mode toggle functionality
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('mode', body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Check for saved mode preference
const savedMode = localStorage.getItem('mode');
if (savedMode === 'light') {
    body.classList.add('light-mode');
}

function handleInput(value) {
    if (value >= '0' && value <= '9') {
        inputDigit(value);
    } else if (value === '.') {
        inputDecimal();
    } else if (value === '+/-') {
        inputSign();
    } else if (value === '%') {
        inputPercent();
    } else if (['+', '-', '*', '/'].includes(value)) {
        handleOperator(value);
    } else if (value === '=') {
        handleEquals();
    } else if (value === 'AC') {
        resetCalculator();
    }
    updateDisplay();
}

function inputDigit(digit) {
    if (waitingForSecondOperand) {
        displayValue = digit;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
}

function inputSign() {
    displayValue = (parseFloat(displayValue) * -1).toString();
}

function inputPercent() {
    displayValue = (parseFloat(displayValue) / 100).toString();
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
}

function handleEquals() {
    if (firstOperand === null) {
        return;
    }

    const inputValue = parseFloat(displayValue);
    const result = calculate(firstOperand, inputValue, operator);
    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
}

function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

function resetCalculator() {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
}

updateDisplay();
