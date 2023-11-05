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


//VARIABLES

let totalNum = 0;
let currentNum = 0;

// FUNCTIONS
function add(e) {
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
    if (currentNum === 0) {
        currentNum = 1;

    } else {
        currentNum += "1";
    }
    readOut.textContent = currentNum;
});

deleteBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    
});

sevenBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 1;

    } else {
        currentNum += "1";
    }
    readOut.textContent = currentNum;
});

eightBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 1;

    } else {
        currentNum += "1";
    }
    readOut.textContent = currentNum;
});

nineBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 1;

    } else {
        currentNum += "1";
    }
    readOut.textContent = currentNum;
});

divideBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
});

fourBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 1;

    } else {
        currentNum += "1";
    }
    readOut.textContent = currentNum;
});

fiveBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 1;

    } else {
        currentNum += "1";
    }
    readOut.textContent = currentNum;
});

sixBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 1;

    } else {
        currentNum += "1";
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

    } else {
        currentNum += "1";
    }
    readOut.textContent = currentNum;
});

twoBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 1;

    } else {
        currentNum += "1";
    }
    readOut.textContent = currentNum;
});

threeBtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    if (currentNum === 0) {
        currentNum = 1;

    } else {
        currentNum += "1";
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
        currentNum = 1;

    } else {
        currentNum += "1";
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
