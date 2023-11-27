// Initialize global variables
const numberButtons = document.querySelector(".btn-controls-nums");
const operatorButtons = document.querySelector(".numerics");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const backButton = document.querySelector("#back")
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
    // if the user has typed a new CurrentVal and wants to do math on it
    if (currentVal != 0) {
        // save the previously entered number to history
        history.push(+currentVal);
        // change screen to last stored #
        screenDiv.textContent = history[history.length-1];
        // re-initialize current value
        currentVal = 0;
        if (history.length > 1 && operator != "=") {
            operate(history, operator);
        }
    // if the user wants to do math on the last solution
    } else if (currentVal === 0 && operator != "="){
        operate(history, operator);
    // protection against divide by 0
    } else if (currentVal === "0" && operator == "/") {
        alert("Nice try, criminal. You can't divide by zero here.");
        currentVal = 0;
        history = [];
        operator = '';
        screenDiv.textContent = currentVal;
    }

    // assign operator
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
        case "equals":
            operator = "=";
            history = history.slice(history.length - 1);
            return;
    }
})

// displays the most recent value as a string on the screen
function displayVal(currentVal) {
    screenDiv.textContent = currentVal;
}


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
    history.push(currentVal);
    screenDiv.textContent = history[history.length-1];
    currentVal = 0;
}

// Event listener for clear button
clearButton.addEventListener("click", () => {
    currentVal = 0;
    history = [];
    operator = '';
    screenDiv.textContent = currentVal;
})

// Event listener for back button
backButton.addEventListener("click", () => {
    currentVal = currentVal.slice(0, -1);
    if (currentVal == '') {
        currentVal = 0;
    }
    screenDiv.textContent = currentVal;
})