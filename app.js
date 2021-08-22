//Calculator

let firstOperand = '';
let secondOperand = '';

let currentOperation = null;

let equalPhase = false;

let shouldReset = false;


const equal = document.getElementById("equals");
const clearBtn = document.getElementById("clearAll");


const operatorBtn = document.querySelectorAll("[data-operator]");
const numberBtn = document.querySelectorAll("[data-number]");

let currentScreenNumber = document.querySelector('.current-number');
let previousScreenNumber = document.querySelector('.previous-number');


// Assign Numbers

numberBtn.forEach((button) =>
    button.addEventListener ('click', () => addNumber(button.textContent))
    );

    function addNumber(a) {

        if (currentScreenNumber.innerHTML === '0' || shouldReset) { 
        resetDisplay();
        
        } 

        if (currentOperation == null) {

            currentScreenNumber.innerText += a;
            firstOperand = currentScreenNumber.innerText;

        } else if (currentScreenNumber.innerText === firstOperand.toString()){
            shouldReset = true;
            currentScreenNumber.innerText = 0;
        } else {
            currentScreenNumber.innerText += a;
            secondOperand = currentScreenNumber.innerText;
        }
    };


    function resetDisplay() {
        currentScreenNumber.innerText = '';
        shouldReset = false;

    }

    // Assign Operator

    operatorBtn.forEach((button) =>
    button.addEventListener('click', () => addOperator(button.textContent))
    );


    function addOperator(a) {

            if (currentOperation !== null) {

                currentOperation = a;

                equation(firstOperand, currentOperation, secondOperand);
                
                firstOperand = result;
                
                currentScreenNumber.innerHTML = firstOperand;

                previousScreenNumber.innerHTML = `${firstOperand} ${currentOperation}`;

                console.log(result);

            } else {

                currentOperation = a;
                previousScreenNumber.innerHTML = `${firstOperand} ${currentOperation}`;

            }
    }


    // 



    // Equations

    function add(a , b) {
        result = a + b ;
    }

    //Subtract
    function subtract(a , b) {
        result = a - b ;
    }

    // Multiply

    function multiply(a , b) {
        result = a * b ;
    }

    //  Divide

    function divide(a , b) {
        if(b > a) {
            result = b / a ;
        } else {
            result = a / b ;
        }
    }



    // Decides which function to run

    equal.addEventListener('click', (e) => {
        equation(firstOperand, currentOperation, secondOperand);
        
        equalPhase = true;

        currentScreenNumber.innerText = `${result}`;

        previousScreenNumber.innerText = `${firstOperand} ${currentOperation} ${secondOperand} =`

    });


    function equation(a, c, b) {

        a = Number(a);
        b = Number(b);

        switch (c) {
            case "+":
                add(a,b);
                break;

            case "-":
                subtract(a,b);
                break;

            case "*":
                multiply(a,b);
                break;

            case "/":
                divide(a,b);
                break;

            default:
                console.error("switch has broken");
        }
    }

    //Clear

    clearBtn.addEventListener('click', clearAll);

    function clearAll() {

        firstOperand = '';
        secondOperand = '';
        
        currentOperation = null;

        operationPreform = false;

        currentScreenNumber.innerHTML = '0';
        previousScreenNumber.innerHTML = '';

    }
    
    