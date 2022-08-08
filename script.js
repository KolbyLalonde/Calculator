

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

function operate() {
    if(object.operand === "+"){
        display.textContent = add(parseInt(object.numOne), parseInt(object.numTwo));
    }
    else if(object.operand === "-"){
        display.textContent = subtract(parseInt(object.numOne), parseInt(object.numTwo));
    }
    else if(object.operand === "*"){
        display.textContent = multiply(parseInt(object.numOne), parseInt(object.numTwo));
    }
    else if(object.operand === "/"){
        display.textContent = divide(parseInt(object.numOne), parse(object.numTwo));
    }
    else {
        display.textContent = "ERROR!";
    }
}

function intermediateOperate() {
    if(object.operand === "+"){
        display.textContent = add(parseInt(object.numOne), parseInt(object.numTwo));
    }
    else if(object.operand === "-"){
        display.textContent = subtract(parseInt(object.numOne), parseInt(object.numTwo));
    }
    else if(object.operand === "*"){
        display.textContent = multiply(parseInt(object.numOne), parseInt(object.numTwo));
    }
    else if(object.operand === "/"){
        display.textContent = divide(parseInt(object.numOne), parse(object.numTwo));
    }
    else {
        display.textContent = "ERROR!";
    }
}

// Intermediate Operate Function

// object used to store user number 1, operand and number 2
let object = {}

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
equalButton.addEventListener("click", operate);
clearButton.addEventListener("click", clear);

// Creating button functions after corresponding click
function addOp(){ 
    display.textContent += " + "; 
    if(("numOne" in object) && ("numTwo" in object) && ("operand" in object)){
        intermediateOperate();
    }
    else{
        object["operand"] = "+";
    }
}

function subOp(){ 
    display.textContent += " - "; 
    if(("numOne" in object) && ("numTwo" in object) && ("operand" in object)){
        intermediateOperate();
    }
    else{
        object["operand"] = "-";
    }
}

function multOp(){ 
    display.textContent += " x "; 
    if(("numOne" in object) && ("numTwo" in object) && ("operand" in object)){
        intermediateOperate();
    }
    else{
        object["operand"] = "*";
    }
}

function divOp(){ 
    display.textContent += " / "; 
    if(("numOne" in object) && ("numTwo" in object) && ("operand" in object)){
        intermediateOperate();
    }
    else{
        object["operand"] = "/";
    }
}

function oneNum(){ 
    display.textContent += "1"; 
    if("operand" in object){
        if("numTwo" in object){
            object["numTwo"] += "1";
        }
        else{
            object["numTwo"] = "1";
        }
    }
    else{
        if("numOne" in object){
            object["numOne"] += "1";
        }
        else{
            object["numOne"] = "1";
        }
    }
}

function twoNum(){ 
    display.textContent += "2"; 
    if("operand" in object){
        if("numTwo" in object){
            object["numTwo"] += "2";
        }
        else{
            object["numTwo"] = "2";
        }
    }
    else{
        if("numOne" in object){
            object["numOne"] += "2";
        }
        else{
            object["numOne"] = "2";
        }
    }
}

function threeNum(){ 
    display.textContent += "3"; 
    if("operand" in object){
        if("numTwo" in object){
            object["numTwo"] += "3";
        }
        else{
            object["numTwo"] = "3";
        }
    }
    else{
        if("numOne" in object){
            object["numOne"] += "3";
        }
        else{
            object["numOne"] = "3";
        }
    }
}

function fourNum(){ 
    display.textContent += "4";
    if("operand" in object){
        if("numTwo" in object){
            object["numTwo"] += "4";
        }
        else{
            object["numTwo"] = "4";
        }
    }
    else{
        if("numOne" in object){
            object["numOne"] += "4";
        }
        else{
            object["numOne"] = "4";
        }
    }
}

function fiveNum(){ 
    display.textContent += "5";
    if("operand" in object){
        if("numTwo" in object){
            object["numTwo"] += "5";
        }
        else{
            object["numTwo"] = "5";
        }
    }
    else{
        if("numOne" in object){
            object["numOne"] += "5";
        }
        else{
            object["numOne"] = "5";
        }
    }
}

function sixNum(){ 
    display.textContent += "6"; 
    if("operand" in object){
        if("numTwo" in object){
            object["numTwo"] += "6";
        }
        else{
            object["numTwo"] = "6";
        }
    }
    else{
        if("numOne" in object){
            object["numOne"] += "6";
        }
        else{
            object["numOne"] = "6";
        }
    }
}

function sevenNum(){ 
    display.textContent += "7";
    if("operand" in object){
        if("numTwo" in object){
            object["numTwo"] += "7";
        }
        else{
            object["numTwo"] = "7";
        }
    }
    else{
        if("numOne" in object){
            object["numOne"] += "7";
        }
        else{
            object["numOne"] = "7";
        }
    }
}

function eightNum(){ 
    display.textContent += "8"; 
    if("operand" in object){
        if("numTwo" in object){
            object["numTwo"] += "8";
        }
        else{
            object["numTwo"] = "8";
        }
    }
    else{
        if("numOne" in object){
            object["numOne"] += "8";
        }
        else{
            object["numOne"] = "8";
        }
    }
}

function nineNum(){ 
    display.textContent += "9";
    if("operand" in object){
        if("numTwo" in object){
            object["numTwo"] += "9";
        }
        else{
            object["numTwo"] = "9";
        }
    }
    else{
        if("numOne" in object){
            object["numOne"] += "9";
        }
        else{
            object["numOne"] = "9";
        }
    }
}

function zeroNum(){ 
    display.textContent += "0"; 
    if("operand" in object){
        if("numTwo" in object){
            object["numTwo"] += "0";
        }
        else{
            object["numTwo"] = "0";
        }
    }
    else{
        if("numOne" in object){
            object["numOne"] += "0";
        }
        else{
            object["numOne"] = "0";
        }
    }
}

function clear(){ 
    display.textContent = ""; 
    delete object.numOne;
    delete object.numTwo;
    delete object.operand;
}
