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

let firstNum = "0";
let operator = "";
let nextNum = "0";
let total = "0";

// FUNCTIONS
function add(firstNum,nextNum) {
    operator = "+";
    return firstNum + operator + nextNum;
};

function equate(firstNum,operator,nextNum) {
    let equation = firstNum + operator + nextNum;
    console.log(equation);
    equation = equation.split('');
    console.log(equation);
    // totalNum.reduce((a,b) => a `${operator}` b);

}

// EVENT LISTENERS
clearBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    firstNum = "0";
    nextNum = "0";
    readOut.textContent = nextNum;
});

deleteBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    console.log(nextNum);
    readOut.textContent = nextNum;
});

sevenBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (nextNum === "0") {
        nextNum = "7";
        total = nextNum;

    } else if (nextNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        (!(operator === "")) {
            nextNum += "7";
            total = equate(firstNum,operator,nextNum);
    } else {
        nextNum += "7";
    }
    readOut.textContent = nextNum;
});

eightBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (nextNum === "0") {
        nextNum = "8";

    } else if (nextNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        nextNum += "8";
    }
    readOut.textContent = nextNum;
});

nineBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (nextNum === "0") {
        nextNum = "9";

    } else if (nextNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        nextNum += "9";
    }
    readOut.textContent = nextNum;
});

divideBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

fourBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (nextNum === "0") {
        nextNum = "4";

    } else if (nextNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        nextNum += "4";
    }
    readOut.textContent = nextNum;
});

fiveBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (nextNum === "0") {
        nextNum = "5";

    } else if (nextNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        nextNum += "5";
    }
    readOut.textContent = nextNum;
});

sixBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (nextNum === "0") {
        nextNum = "6";

    } else if (nextNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        nextNum += "6";
    }
    readOut.textContent = nextNum;
});

multiplyBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

oneBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (nextNum === "0") {
        nextNum = "1";
    } else if (nextNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        nextNum += "1";
    }
    readOut.textContent = nextNum;
});

twoBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (nextNum === "0") {
        nextNum = "2";

    } else if (nextNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        nextNum += "2";
    }
    readOut.textContent = nextNum;
});

threeBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (nextNum === "0") {
        nextNum = "3";

    } else if (nextNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        nextNum += "3";
    }
    readOut.textContent = nextNum;
});

minusBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

decimalBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

zeroBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (nextNum === "0") {
        nextNum = "0";

    } else if (nextNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else {
        nextNum += "0";
    }
    readOut.textContent = nextNum;
});

equalsBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    total = Number(firstNum + operator + nextNum);
});

plusBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    operator = "+";
});
