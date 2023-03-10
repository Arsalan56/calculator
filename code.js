// Define the variables that store the numbers and operators
let nums = []
let operators = []

// Variable that keeps track when to clear output. Used in 
// long/complex equations
let clearFirst = true;

let opsList = ['*', '/', '+', '-']
// Select box that displays answer. Will be used multiple times
// Throughout the project
let output = document.querySelector('.output');

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a/b;

// Takes in operator and two numbers, returns result
const operate = (op, a, b) => {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return mult(a, b);
        case '/':
            if (b == 0) {
                nums = [];
                operators = [];
                return 'ERROR!'
            }
            return div(a, b);
    }
}

// code that makes number buttons work properly
let num = document.querySelectorAll('.num');
num.forEach(num => num.addEventListener('click', () => {
    if (clearFirst == true) output.textContent = '';
    clearFirst = false;
    output.textContent += num.textContent;
}));

function clearAll () {
    clearFirst = true;
    nums = [];
    operators = [];
    output.textContent = 0;
}
// code that makes AC button work
let clear = document.querySelector('.clear');
clear.addEventListener('click', clearAll);

function opsFunc (oper) {
    nums.push(parseFloat(output.textContent));
    output.textContent = '';
    if (nums.length >= 2) {
        solve()
        nums.push(parseFloat(output.textContent));
    };
    // If an error occurs, output error instead of NaN
    if (output.textContent == 'NaN') {
        output.textContent = 'ERROR!';
        nums.splice(0, nums.length);
        operators.splice(0, operators.length);
    }
}
// code that makes operation buttons work properly
let ops = document.querySelectorAll('.op');
ops.forEach(op => op.addEventListener('click', () => {
    operators.push(op.textContent);
    opsFunc(op);
}))

function equalFunc () {
    nums.push(parseFloat(output.textContent));
    if (nums.length >= 2) {
        solve()
    } else {
        nums.pop();
    }
}

// code that makes equal sign work properly
let equal = document.querySelector('.equal');
equal.addEventListener('click', equalFunc)
// Function to solve numbers 
function solve () {
    out = operate(operators[0], nums[0], nums[1]);
    if (out % 1 != 0) out = out.toFixed(10);
    output.textContent = parseFloat(out);
    operators.splice(0, 1);
    nums.splice(0, nums.length);
    clearFirst = true;
}

// Event handler for negate button
let negate = document.querySelector('.negate');
negate.addEventListener('click', () => {
    let num = output.textContent;
    if (num[0] == '-') {
        let arr = [...num];
        arr.splice(0, 1);
        output.textContent = arr.join('');
    } else {
        output.textContent = `-${num}`;
    }
})

// Event handler for delete button
let del = document.querySelector('.del');
del.addEventListener('click', () => {
    let num = output.textContent;
    let arr = [...num];
    arr.pop();
    output.textContent = arr.join('');
})

// Event handler for decimal button
let deci = document.querySelector('.deci');
deci.addEventListener('click', () => {
    let out = [...output.textContent];
    if (out.indexOf('.') < 0) {
        output.textContent = `${output.textContent}.`;
    }
})

window.addEventListener('keydown', e => {
    let key = e.key
    if (key >= 0) {
        if (clearFirst == true) output.textContent = '';
        clearFirst = false;
        output.textContent += key;
    } else if (key == 'Backspace' || key == 'a') {
        clearAll();
    } else if (opsList.indexOf(key) >= 0) {
        operators.push(opsList[opsList.indexOf(key)]);
        opsFunc(opsList.indexOf(key));
    } else if (key == '=' || key == 'Enter') {
        equalFunc();
    } else if (key == '.') {
        let out = [...output.textContent];
        if (out.indexOf('.') < 0) {
            clearFirst = false;
            output.textContent = `${output.textContent}.`;
        }
    }
})