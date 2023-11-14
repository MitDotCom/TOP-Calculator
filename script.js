// CONSTANTS
const firstNumRead = document.querySelector('.firstNumRead');
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
    "-" : function(firstNum,currentNum) {firstNum - currentNum},
    "+" : function(firstNum,currentNum) {firstNum + currentNum},
    "*" : function(firstNum,currentNum) {firstNum * currentNum},
    "/" : function(firstNum,currentNum) {firstNum / currentNum}
};
//VARIABLES

let firstNum = "0";
let operator = "";
let currentNum = "0";
let total = "0";

// FUNCTIONS
function add(firstNum,currentNum) {
    operator = "+";
    return firstNum + operator + currentNum;
};

function equate(firstNum,operator,currentNum) {
    total = firstNum + operator + currentNum;
    total = total.split(/(?=[\W])|(?<=[\W])/);
    total = operators[total[1]];
    console.log(total)
    console.log(currentNum);
    currentNum = total;
}

function updateReadOut() {
    firstNumRead.textContent = firstNum;
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
    updateReadOut();
});

// working out logic just on seven button for now

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
    } else if (!(operator === "")) {
        currentNum += "7";
    } else {
        currentNum += "7";
    }
    updateReadOut();
    
});

eightBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "8";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "8";
    }
    updateReadOut();
});

nineBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "9";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "9";
    }
    updateReadOut();
});

divideBtn.addEventListener('click', function(e) {
    e.stopPropagation();
});

fourBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "4";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "4";
    }
    updateReadOut();
});

fiveBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "5";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "5";
    }
    updateReadOut();
});

sixBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "6";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "6";
    }
    updateReadOut();
});

multiplyBtn.addEventListener('click', function(e) {
    e.stopPropagation();
});

oneBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "1";
    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "1";
    }
    updateReadOut();
});

twoBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "2";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "2";
    }
    updateReadOut();
});

threeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "3";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "3";
    }
    updateReadOut();
});

minusBtn.addEventListener('click', function(e) {
    e.stopPropagation();
});

decimalBtn.addEventListener('click', function(e) {
    e.stopPropagation();
});

zeroBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentNum === "0") {
        currentNum = "0";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "0";
    }
    updateReadOut();
});

equalsBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    currentNum = equate(firstNum,operator,currentNum);
});

plusBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (operator === "+") {
        currentNum = equate(firstNum,operator,currentNum);
        updateReadOut();
    }
    operator = "+";

});
