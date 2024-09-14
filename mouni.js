// script.js
function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById("result").value += number;
}

function appendOperator(operator) {
    let currentValue = document.getElementById("result").value;
    if (currentValue && !isNaN(currentValue[currentValue.length - 1])) {
        document.getElementById("result").value += operator;
    }
}

function calculateResult() {
    let expression = document.getElementById("result").value;
    try {
        let result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
