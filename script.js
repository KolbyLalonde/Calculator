

// Creating basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Testing basic math functions
console.log(add(5,5));
console.log(subtract(5,5));
console.log(multiply(5,5));
console.log(divide(8.3,5));


// Operate function
function operate(op, a, b) {
    if(op === "+"){
        return add(a,b);
    }
    else if(op === "-"){
        return subtract(a,b);
    }
    else if(op === "*"){
        return multiply(a,b);
    }
    else if(op === "/"){
        return divide(a,b);
    }
    else {
        return "ERROR!";
    }
}

// Testing operate 
console.log(operate("+",4,4));
console.log(operate("-",4,4));
console.log(operate("*",4,4));
console.log(operate("/",4,4));

// object used to store user number 1, operand and number 2
let Object = {}


// Setting up display 
let display = document.getElementById("interface");
display.textContent = "";

// Getting button variables
let addButton = document.getElementById("add");
let subButton = document.getElementById("subtract");
let multButton = document.getElementById("multiply");
let divButton = document.getElementById("divide");
let oneButton = document.getElementById("one");
let twoButton = document.getElementById("two");
let threeButton = document.getElementById("three");
let fourButton = document.getElementById("four");
let fiveButton = document.getElementById("five");
let sixButton = document.getElementById("six");
let sevenButton = document.getElementById("seven");
let eightButton = document.getElementById("eight");
let nineButton = document.getElementById("nine");
let zeroButton = document.getElementById("zero");
let equalButton = document.getElementById("equal");
let clearButton = document.getElementById("clear");

// Getting button event listeners
addButton.addEventListener("click", addOp);
subButton.addEventListener("click", subOp);
multButton.addEventListener("click", multOp);
divButton.addEventListener("click", divOp);
oneButton.addEventListener("click", oneNum);
twoButton.addEventListener("click", twoNum);
threeButton.addEventListener("click", threeNum);
fourButton.addEventListener("click", fourNum);
fiveButton.addEventListener("click", fiveNum);
sixButton.addEventListener("click", sixNum);
sevenButton.addEventListener("click", sevenNum);
eightButton.addEventListener("click", eightNum);
nineButton.addEventListener("click", nineNum);
zeroButton.addEventListener("click", zeroNum);
// equalButton.addEventListener("click", operate);
clearButton.addEventListener("click", clear);

// Creating button functions after corresponding click
function addOp(){ display.textContent += " + "; }
function subOp(){ display.textContent += " - "; }
function multOp(){ display.textContent += " x "; }
function divOp(){ display.textContent += " / "; }
function oneNum(){ display.textContent += "1"; }
function twoNum(){ display.textContent += "2"; }
function threeNum(){ display.textContent += "3"; }
function fourNum(){ display.textContent += "4"; }
function fiveNum(){ display.textContent += "5"; }
function sixNum(){ display.textContent += "6"; }
function sevenNum(){ display.textContent += "7"; }
function eightNum(){ display.textContent += "8"; }
function nineNum(){ display.textContent += "9"; }
function zeroNum(){ display.textContent += "0"; }
function clear(){ display.textContent = ""; }
