// Define the variables that store the numbers and operators
let nums = []
let operators = []
// Variable that keeps track when to clear output. Used in 
// long/complex equations
let clearFirst = false

// Select box that displays answer. Will be used multiple times
// Throughout the project
let output = document.querySelector('.output');

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a/b;

// Takes in operator and two numbers
const operate = (op, a, b) => {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return mult(a, b);
        case '/':
            return div(a, b);
    }
}

function display(n) {
    output.textContent += n;
}

let num = document.querySelectorAll('.num');
num.forEach(num => num.addEventListener('click', () => {
    if (clearFirst == true) output.textContent = '';
    display(num.textContent)
}));

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => output.textContent = '');

let ops = document.querySelectorAll('.op');
ops.forEach(op => op.addEventListener('click', () => {
    operators.push(op.textContent)
    nums.push(parseInt(output.textContent));
    output.textContent = '';
    if (nums.length >= 2) {
        output.textContent = operate(operators[0], nums[0], nums[1]);
        operators.splice(0, 1);
        nums.splice(0, 2);
        nums.push(parseInt(output.textContent));
        clearFirst = true;
    }
    console.log(nums);
    console.log(operators);
}))