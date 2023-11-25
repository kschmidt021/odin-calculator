const numberButtons = document.querySelector(".btn-controls-nums");
// let history = [];
let currentVal = 0;
// operate(a, b, "+");

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
    currentVal = currentVal.toString();
    displayVal(currentVal);
})

function displayVal(currentVal) {
    screenDiv = document.querySelector(".screen");
    screenDiv.textContent = currentVal;

}

function operate(a, b, operator) {
    if (operator == "+") {
        add(a , b);
    } else if (operator == "-"){
        subtract(a , b);
    } else if (operator == "*") {
        multiply(a , b);
    } else if (operator == "/") {
        divide(a , b);
    }
}

function add(a , b) {
    return a + b;
}

function subtract(a , b) {
    return a - b;
}

function multiply(a , b) {
    return a * b;
}

function divide(a , b) {    
    return a / b; 
}