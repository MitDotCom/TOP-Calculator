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
        console.log('if (currentNum === "0")');
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
    numberAction("7");
});

sevenBtn.addEventListener('keypress', function(e) {
    if (e.key === "7") {
        numberAction("7");
    }
});

eightBtn.addEventListener('click', function(e) {
    numberAction("8");
});

nineBtn.addEventListener('click', function(e) {
    numberAction("9");
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
    numberAction("4");
});

fiveBtn.addEventListener('click', function(e) {
    numberAction("5");
});

sixBtn.addEventListener('click', function(e) {
    numberAction("6");
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
    numberAction("1");
});

twoBtn.addEventListener('click', function(e) {
    numberAction("2");
});

threeBtn.addEventListener('click', function(e) {
    numberAction("3");
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
    numberAction("0");
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
