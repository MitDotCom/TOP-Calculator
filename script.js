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
    let equation = firstNum + operator + currentNum;
    console.log(equation);
    equation = equation.split('');
    console.log(equation);
    // totalNum.reduce((a,b) => a `${operator}` b);

}

// EVENT LISTENERS
clearBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    firstNum = "0";
    currentNum = "0";
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
});

deleteBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    currentNum = currentNum.split('');
    currentNum.splice(-1,1);
    currentNum = currentNum.join('');
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
});

// working out logic just on seven button for now

sevenBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === "0") {
        currentNum = "7";
        total = currentNum;
        // calcs.

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
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
    
});

eightBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === "0") {
        currentNum = "8";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "8";
    }
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
});

nineBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === "0") {
        currentNum = "9";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "9";
    }
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
});

divideBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

fourBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === "0") {
        currentNum = "4";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "4";
    }
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
});

fiveBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === "0") {
        currentNum = "5";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "5";
    }
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
});

sixBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === "0") {
        currentNum = "6";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "6";
    }
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
});

multiplyBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

oneBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === "0") {
        currentNum = "1";
    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "1";
    }
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
});

twoBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === "0") {
        currentNum = "2";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "2";
    }
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
});

threeBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === "0") {
        currentNum = "3";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "3";
    }
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
});

minusBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

decimalBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

zeroBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === "0") {
        currentNum = "0";

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        currentNum += "0";
    }
    firstNumRead.textContent = firstNum;
    currentNumRead.textContent = currentNum;
    currentNumCalc.textContent = currentNum;
});

equalsBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    total = Number(firstNum + operator + currentNum);
});

plusBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    operator = "+";
    firstNum = currentNum;
});
