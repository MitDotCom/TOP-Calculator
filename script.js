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
    if (total.length > 1) {
        total = total.toFixed(1);
    }
    firstNum = currentNum.toString();
    currentNum = total.toString();
    equated = true;
    return [firstNum,operator,currentNum,equated];
}

function updateReadOut() {
    currentNumCalc.textContent = currentNum;
}

function numberAction(numStr) {
    if (currentNum === "0") {
        currentNum = numStr;
        total = currentNum;
        // calc

    } else if (currentNum.toString().length === 10){
        // Max readOut length, don't add another number
    } else if 
        ((!(operator === "")) && (firstNum === "0")) {
            firstNum = currentNum;
            currentNum = numStr;
    } else if (equated) {
        firstNum = currentNum;
        currentNum = numStr;
        equated = false;
    } else {
        currentNum += numStr;
    }
    updateReadOut();
}

// EVENT LISTENERS
clearBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    firstNum = "0";
    currentNum = "0";
    operator =  "";
    updateReadOut();
});

function clickDelete() {
    e.stopPropagation();
    currentNum = currentNum.split('');
    currentNum.splice(-1,1);
    currentNum = currentNum.join('');
    if (currentNum === "") {
        currentNum = "0";
    }
    updateReadOut()
}

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

window.addEventListener('keydown', function(e) {
    e.stopPropagation();
    let targetKey = e.key;
    console.log(targetKey);
    if (targetKey.match(/[0-9]/)) {
        numberAction(targetKey);
    }
});

buttons.addEventListener('click', function(e) {
    e.stopPropagation();
    let targetButton = e.target.id;
    if (targetButton.match(/[0-9]/)) {
        numberAction(targetButton);
    }
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

multiplyBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if ((operator) && (currentNum.toString().length < 10)) {
        [firstNum,operator,currentNum,equated] = equate(firstNum,operator,currentNum,equated);
    } 
    operator = "*";
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
