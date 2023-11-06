// CONSTANTS
const readOut = document.getElementById('readOut');
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

let totalNum = 0;
let currentNum = 0;
let lastNum = 0;

// FUNCTIONS
function add(currentNum,totalNum) {
    totalNum += currentNum
    return totalNum;
};

function subtract() {

};

function multiply() {

};

function divide() {

};

// EVENT LISTENERS
clearBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    currentNum = 0;
    totalNum = 0;
    readOut.textContent = currentNum;
});

deleteBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();

    readOut.textContent = currentNum;
});

sevenBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 7;

    } else if (currentNum.toString().length === 10){
        
    } else {
        currentNum += "7";
    }
    readOut.textContent = currentNum;
});

eightBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 8;

    } else if (currentNum.toString().length === 10){
        
    } else {
        currentNum += "8";
    }
    readOut.textContent = currentNum;
});

nineBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 9;

    } else if (currentNum.toString().length === 10){
        
    } else {
        currentNum += "9";
    }
    readOut.textContent = currentNum;
});

divideBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

fourBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 4;

    } else if (currentNum.toString().length === 10){
        
    } else {
        currentNum += "4";
    }
    readOut.textContent = currentNum;
});

fiveBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 5;

    } else if (currentNum.toString().length === 10){
        
    } else {
        currentNum += "5";
    }
    readOut.textContent = currentNum;
});

sixBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 6;

    } else if (currentNum.toString().length === 10){
        
    } else {
        currentNum += "6";
    }
    readOut.textContent = currentNum;
});

multiplyBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

oneBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 1;
    } else if (currentNum.toString().length === 10){

    } else {
        currentNum += "1";
    }
    readOut.textContent = currentNum;
});

twoBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 2;

    } else if (currentNum.toString().length === 10){
        
    } else {
        currentNum += "2";
    }
    readOut.textContent = currentNum;
});

threeBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 3;

    } else if (currentNum.toString().length === 10){
        
    } else {
        currentNum += "3";
    }
    readOut.textContent = currentNum;
});

minusBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

decimalBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

zeroBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 0;

    } else if (currentNum.toString().length === 10){
        
    } else {
        currentNum += "0";
    }
    readOut.textContent = currentNum;
});

equalsBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

plusBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    add(e);
});
