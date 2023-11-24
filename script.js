const numberButtons = document.querySelector(".btn-controls-nums");

operate(2, 3, "+")

numberButtons.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case "one":
            return 1;
        case "two":
            return 2;
        case "three":
            return 3;
        case "four":
            return 4;
        case "five":
            return 5;
        case "six":
            return 6;
        case "seven":
            return 7;
        case "eight":
            return 8;
        case "nine":
            return 9;
        case "zero":
            return 0;
    }
})

function operate(a, b, operator) {
    // find a way to have this function called with user inputs
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