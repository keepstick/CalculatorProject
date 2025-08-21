let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = 0;


let displayNumber = document.querySelector('#input');
displayNumber.textContent = 0;
let bodyElement = document.querySelector('body');

let keyboardSupportElement = document.createElement('div');
bodyElement.appendChild(keyboardSupportElement)
keyboardSupportElement.style.display = 'none';


document.addEventListener('keydown', function(e) {
    keyboardSupportElement.textContent = String(e.key) == 'Enter' ? '=' : String(e.key);
    console.log(e.key)
    keyboardSupportElement.click();
})






bodyElement.addEventListener('click', function(e) {
    if("0123456789.".includes(e.target.textContent)) {
        if (result !== 0 && operator == '') {
            firstNumber = '';
            firstNumber = firstNumber + e.target.textContent
            displayNumber.textContent = firstNumber
        }   

        else {
            if(operator == '') {
                firstNumber = firstNumber + e.target.textContent
                displayNumber.textContent = firstNumber
            }

            else {
                secondNumber = secondNumber + e.target.textContent
                displayNumber.textContent = secondNumber;
            }
        }

}

    switch (e.target.textContent) {
        case '=':
            switch (operator) {
                case '+':
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    displayNumber.textContent = Math.trunc(result * 100) / 100;
                    firstNumber = result;
                    secondNumber = '';
                    operator = '';
                    break;
                case '-':
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    displayNumber.textContent = Math.trunc(result * 100) / 100;
                    firstNumber = result;
                    secondNumber = '';
                    operator = '';
                    break;

                case '*':
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    displayNumber.textContent = Math.trunc(result * 100) / 100;
                    firstNumber = result;
                    secondNumber = '';
                    operator = '';
                    break;

                case '/':
                    if (secondNumber !== 0) {
                        result = parseFloat(firstNumber) / parseFloat(secondNumber);
                        displayNumber.textContent = Math.trunc(result * 100) / 100;
                        firstNumber = result;
                        secondNumber = '';
                        operator = '';
                        break;
                    }

                    else {
                        displayNumber.textContent = 'Divide by zero'
                        break;
                    }

            }
            break;

        case '+': 
            operator = '+';
            break;
        
         case '-': 
            operator = '-';
            break;

        case '*':
            operator = '*'
            break;

        case '/':
            operator = '/'
            break;
        case 'C':
            displayNumber.textContent = 0;
            firstNumber = 0;
            operator = '';
            secondNumber = '';
            result = 0;
            break;

        case 'B' :
            if (secondNumber !== '') {
                secondNumber = Math.trunc(parseFloat(secondNumber) / 10)
                displayNumber.textContent = secondNumber
            }
            else {
                firstNumber = Math.trunc(parseFloat(firstNumber) / 10)
                displayNumber.textContent = firstNumber
            }
    }





}

)


