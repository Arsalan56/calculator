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
    if (n =='+' || n =='-' || n =='*' || n =='/') {
        output.textContent += ` ${n} `
    } else {
    output.textContent += n;
    }
}

let btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', () => display(btn.textContent)));

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => output.textContent = '');

