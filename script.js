// CONSTANTS
const firstNumRead = document.querySelector('.firstNumRead');
const operatorRead = document.querySelector('.operatorRead');
const currentNumRead = document.querySelector('.currentNumRead');
const currentNumCalc = document.getElementById('currentNumCalc');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');
const divideBtn = document.querySelector('.divide');
const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const multiplyBtn = document.querySelector('.multiply');
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const minusBtn = document.querySelector('.minus');
const decimalBtn = document.querySelector('.decimal');
const zeroBtn = document.querySelector('.zero');
const equalsBtn = document.querySelector('.equals');
const plusBtn = document.querySelector('.plus');

const maxNum = 9999999999;
const operators = {
    "-" : function(firstNum,currentNum) {return firstNum - currentNum},
    "+" : function(firstNum,currentNum) {return firstNum + currentNum},
    "*" : function(firstNum,currentNum) {return firstNum * currentNum},
    "/" : function(firstNum,currentNum) {return firstNum / currentNum}
};
//VARIABLES

let firstNum = "0";
let operator = "";
let currentNum = "0";
let total = "0";
let equated = false;

// FUNCTIONS

function equate(firstNum,operator,currentNum,equated) {
    firstNum = parseFloat(firstNum);
    currentNum = parseFloat(currentNum);
    total = firstNum + operator + currentNum;
    total = total.split(/(?=[\W])|(?<=[\W])/);
    console.log(total);
    total = operators[operator](firstNum,currentNum);
    firstNum = currentNum;
    currentNum = total;
    equated = true;
    return [firstNum,operator,currentNum,equated];
}

function updateReadOut() {
    firstNumRead.textContent = firstNum;
    operatorRead.textContent = operator;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
}

// EVENT LISTENERS
clearBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    firstNum = "0";
    currentNum = "0";
    operator =  "";
    updateReadOut();
});

deleteBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    currentNum = currentNum.split('');
    currentNum.splice(-1,1);
    currentNum = currentNum.join('');
    if (currentNum === "") {
        currentNum = "0";
    }
    updateReadOut();
});

// working out logic just on seven button for now

sevenBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        console.log('if (currentNum === "0")');
        currentNum = "7";
        total = currentNum;
        // calc

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        ((!(operator === "")) && (firstNum === "0")) {
            firstNum = currentNum;
            currentNum = "7";
    } else if (equated) {
        firstNum = currentNum;
        currentNum = "7";
        equated = false;
    } else {
        currentNum += "7";
    }
    updateReadOut();
    
});

eightBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "8";
        total = currentNum;
        // calc

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        ((!(operator === "")) && (firstNum === "0")) {
            firstNum = currentNum;
            currentNum = "8";
    } else if (equated) {
        firstNum = currentNum;
        currentNum = "8";
        equated = false;
    } else {
        currentNum += "8";
    }
    updateReadOut();
});

nineBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "9";
        total = currentNum;
        // calc

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        ((!(operator === "")) && (firstNum === "0")) {
            firstNum = currentNum;
            currentNum = "9";
    } else if (equated) {
        firstNum = currentNum;
        currentNum = "9";
        equated = false;
    } else {
        currentNum += "9";
    }
    updateReadOut();
});

divideBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if ((operator) && (currentNum.toString().length < 10)) {
        [firstNum,operator,currentNum,equated] = equate(firstNum,operator,currentNum,equated);
    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    }
    operator = "/";
    updateReadOut();
});

fourBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "4";
        total = currentNum;
        // calc

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        ((!(operator === "")) && (firstNum === "0")) {
            firstNum = currentNum;
            currentNum = "4";
    } else if (equated) {
        firstNum = currentNum;
        currentNum = "4";
        equated = false;
    } else {
        currentNum += "4";
    }
    updateReadOut();
});

fiveBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "5";
        total = currentNum;
        // calc

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        ((!(operator === "")) && (firstNum === "0")) {
            firstNum = currentNum;
            currentNum = "5";
    } else if (equated) {
        firstNum = currentNum;
        currentNum = "5";
        equated = false;
    } else {
        currentNum += "5";
    }
    updateReadOut();
});

sixBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "6";
        total = currentNum;
        // calc

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        ((!(operator === "")) && (firstNum === "0")) {
            firstNum = currentNum;
            currentNum = "6";
    } else if (equated) {
        firstNum = currentNum;
        currentNum = "8";
        equated = false;
    } else {
        currentNum += "6";
    }
    updateReadOut();
});

multiplyBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if ((operator) && (currentNum.toString().length < 10)) {
        [firstNum,operator,currentNum,equated] = equate(firstNum,operator,currentNum,equated);
    } 
    operator = "*";
    updateReadOut();
});

oneBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "1";
        total = currentNum;
        // calc

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        ((!(operator === "")) && (firstNum === "0")) {
            firstNum = currentNum;
            currentNum = "1";
    } else if (equated) {
        firstNum = currentNum;
        currentNum = "1";
        equated = false;
    } else {
        currentNum += "1";
    }
    updateReadOut();
});

twoBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "2";
        total = currentNum;
        // calc

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        ((!(operator === "")) && (firstNum === "0")) {
            firstNum = currentNum;
            currentNum = "2";
    } else if (equated) {
        firstNum = currentNum;
        currentNum = "2";
        equated = false;
    } else {
        currentNum += "2";
    }
    updateReadOut();
});

threeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "3";
        total = currentNum;
        // calc

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        ((!(operator === "")) && (firstNum === "0")) {
            firstNum = currentNum;
            currentNum = "3";
    } else if (equated) {
        firstNum = currentNum;
        currentNum = "3";
        equated = false;
    } else {
        currentNum += "3";
    }
    updateReadOut();
});

minusBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if ((operator) && (currentNum.toString().length < 10)) {
        [firstNum,operator,currentNum,equated] = equate(firstNum,operator,currentNum,equated);
    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    }
    operator = "-";
    updateReadOut();
});

decimalBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    currentNum += ".";
    updateReadOut();
});

zeroBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "0";
        total = currentNum;
        // calc

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        ((!(operator === "")) && (firstNum === "0")) {
            firstNum = currentNum;
            currentNum = "0";
    } else if (equated) {
        firstNum = currentNum;
        currentNum = "0";
        equated = false;
    } else {
        currentNum += "0";
    }
    updateReadOut();
});

equalsBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if ((operator) && (currentNum.toString().length < 10)) {
    [firstNum,operator,currentNum,equated] = equate(firstNum,operator,currentNum,equated);
    }
    operator = "";
    updateReadOut();
});

plusBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if ((operator) && (currentNum.toString().length < 10)) {
        [firstNum,operator,currentNum,equated] = equate(firstNum,operator,currentNum,equated);
    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    }
    operator = "+";
    updateReadOut();
});
