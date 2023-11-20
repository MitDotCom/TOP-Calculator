// CONSTANTS
const currentNumCalc = document.getElementById('currentNumCalc');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const sevenBtn = document.getElementById('7');
const eightBtn = document.getElementById('8');
const nineBtn = document.getElementById('9');
const divideBtn = document.getElementById('/');
const fourBtn = document.getElementById('4');
const fiveBtn = document.getElementById('5');
const sixBtn = document.getElementById('6');
const multiplyBtn = document.getElementById('*');
const oneBtn = document.getElementById('1');
const twoBtn = document.getElementById('2');
const threeBtn = document.getElementById('3');
const minusBtn = document.getElementById('-');
const decimalBtn = document.getElementById('.');
const zeroBtn = document.getElementById('0');
const equalsBtn = document.getElementById('=');
const plusBtn = document.getElementById('+');

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
    total = operators[operator](firstNum,currentNum);
    total = total.toFixed(1);
    total = total.toString();
    if (total.includes('0',-1)) {
        total = parseInt(total);
        total = total.toFixed(0);
    };
    firstNum = currentNum.toString();
    currentNum = total.toString();
    equated = true;
    return [firstNum,operator,currentNum,equated];
}

function updateReadOut() {
    currentNumCalc.textContent = currentNum;
}

// EVENT LISTENERS
clearBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    firstNum = "0";
    currentNum = "0";
    operator =  "";
    updateReadOut();
    return [firstNum,operator,currentNum,equated];
});

sevenBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
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
    return [firstNum,operator,currentNum,equated];
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
    if (!(currentNum.includes('.') === true)) {
        currentNum += ".";
    }
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
