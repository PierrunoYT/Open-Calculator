function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearEntry() {
    let display = document.getElementById('display');
    display.value = display.value.split(/[\+\-\*\/]/).pop();
}

function removeLastChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
