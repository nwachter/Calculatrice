
const keys = document.querySelector('.keys');
const buttons = keys.querySelectorAll('button');
let typed = document.querySelector('.typed');
let resultElement = document.querySelector('.result');
const regexTwoSymbols = /([+\-/*])\1/;
const operators = ['-', '+', '*', '/'];

for (let i = 0; i < buttons.length - 1; i++) {
    const button = buttons[i];
    button.addEventListener('click', type);
}

const type = (e) => {
    e.preventDefault();

    //Si l'utilisateur tape la touche C (clear)
    if (e.target.innerText === 'C') {
        typed.innerText = '';
        resultElement.innerText = '';
    }
    //Si l'utilisateur tape un opérateur en premier
    else if (e.target.innerText === '+' || e.target.innerText === '*' || e.target.innerText === '-' || e.target.innerText === '/') {
        if (typed.innerText === '') {
            typed.innerText = `0${e.target.innerText}`;
        }
        //Si l'utilisateur rentre 2 symboles de suite
        else if (operators.includes(e.target.innerText) && operators.includes(typed.innerText.charAt(typed.innerText.length - 1))) {
            return false;
        }
        typed.innerText += e.target.innerText;
    }
    //Si l'utilisateur tape un chiffre
    else if ((parseInt(e.target.innerText) > -1) && (parseInt(e.target.innerText) < 10)) {
        if (typed.innerText === '') {
            typed.innerText += e.target.innerText;
        }
        else {
            typed.innerText += e.target.innerText;

            if (/[+\-*\/]+?/g.test(typed.innerText)) {
                let result = eval(typed.innerText);
                resultElement.innerText = eval(typed.innerText);
            }
        }
    }

    else {
        typed.innerText += e.target.innerText;
    }

}
