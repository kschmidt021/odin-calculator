// Initialize global variables
const numberButtons = document.querySelector(".btn-controls-nums");
const operatorButtons = document.querySelector(".numerics");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const screenDiv = document.querySelector(".screen");
let history = [];
let currentVal = 0;
let operator = '';
// operate(a, b, "+");

// Event listener for number buttons
numberButtons.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case "one":
            currentVal +=  1;
            break;
        case "two":
            currentVal +=  2;
            break;
        case "three":
            currentVal +=  3;
            break;
        case "four":
            currentVal +=  4;
            break;
        case "five":
            currentVal +=  5;
            break;
        case "six":
            currentVal +=  6;
            break;
        case "seven":
            currentVal +=  7;
            break;
        case "eight":
            currentVal +=  8;
            break;
        case "nine":
            currentVal +=  9;
            break;
        case "zero":
            currentVal +=  0;
            break;
    }
    // makes the integers display as a string, so they concat instead of sum
    currentVal = currentVal.toString();
    displayVal(currentVal);
})

// Event listener for operator buttons
operatorButtons.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case "add":
            operator = "+";
            break;
        case "subtract":
            operator = "-";
            break;
        case "multiply":
            operator = "*";
            break;
        case "divide":
            operator = "/";
            break;
    }
    // save the previously entered number to history and re-initialize the value
    history.push(+currentVal);
    currentVal = 0;
    if (history.length > 1) {
        operate(history, operator);
    }
})

// displays the most recent value as a string on the screen
function displayVal(currentVal) {
    screenDiv.textContent = currentVal;
}

// Event listener for the equals button
equalsButton.addEventListener("click", operate(history, operator));


// performs the math on the last 2 numbers in history
function operate(history, operator) {
    if (operator == "+") {
        currentVal = history.slice(-2).reduce((total, val) => total + val);
    } else if (operator == "-"){
        currentVal = history.slice(-2).reduce((total, val) => total - val);
    } else if (operator == "*") {
        currentVal = history.slice(-2).reduce((total, val) => total * val);
    } else if (operator == "/") {
        currentVal = history.slice(-2).reduce((total, val) => total / val);
    }
    screenDiv.textContent = currentVal;
}

// Event listener for clear button
clearButton.addEventListener("click", () => {
    currentVal = 0;
    history = [];
    screenDiv.textContent = currentVal;
})