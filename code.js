let nums = []

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

let output = document.querySelector('.output');
function display(n) {
    output.textContent += n;
}

let num = document.querySelectorAll('.num');
num.forEach(num => num.addEventListener('click', () => display(num.textContent)));

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => output.textContent = '');

let ops = document.querySelectorAll('.op');
ops.forEach(op => op.addEventListener('click', () => {
    nums.push(output.textContent);
    output.textContent = '';
}))