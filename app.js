const BnW = document.querySelector('.BnW');
const circle = document.querySelector('.circle');
const main = document.querySelector('.main');
const row = document.querySelector('.row');
const buttons = document.querySelectorAll('.button');
const process = document.querySelector('.process');
const live = document.querySelector('.live');

let a = 0, b = 0, operator = '';
let word = []; //for DEL
let stack = []; //for calculation
let text = '';
let temp = '';

BnW.addEventListener('click', function(){
    circle.classList.toggle('toggle');
    BnW.classList.toggle('toggle');
    main.classList.toggle('toggle');
});

buttons.forEach(button => button.addEventListener('click', function(){
    text = this.textContent;
    if(isNaN(Number(text)) == false || text == '.'){
        live.textContent += text;
    } else if(text == 'Clear'){ // if '=' is pressed
        live.textContent = '';
        process.textContent = '';
        stack = [];
    }else if(text == 'DEL'){ // if '=' is pressed
        word = live.textContent.split('');
        word.splice(word.length-1, 1);
        newWord = word.join('');
        live.textContent = newWord;
    } else if(text == '='){ // if '=' is pressed
        process.textContent += live.textContent;
        stack.push(live.textContent);
        console.log(stack);
        
        live.textContent = calculate(stack);
    } else{ //'operators pressed'
        stack.push(live.textContent);
        if (stack.length == 3) {
            let result = calculate(stack);
            process.textContent = result + text;
            stack.push(result);
            stack.push(text);
            live.textContent = '';
            result = 0;
        } else {
            stack.push(text);
            process.textContent = live.textContent + text;
            live.textContent = '';
        }
    }
}));

//functions for calculation:
function calculate(array) { //to calculate and also display
    b = array.pop();
    operator = array.pop();
    a = array.pop();
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x' :
            return multiply(a,b);
        default:
            return divide(a,b);
    }
}

function add(a,b){
    a = Number(a);
    b = Number(b);
    return a + b;
};

function subtract(a,b){
    a = Number(a);
    b = Number(b);
    return a - b;
};

function multiply(a,b){
    a = Number(a);
    b = Number(b);
    return a * b;
};

function divide(a,b){
    a = Number(a);
    b = Number(b);
    return a / b;
};


