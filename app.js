//Calculator

let firstOperand = '';
let secondOperand = '';

let currentOperation = null;

let operationPreform = false;


const operatorBtn = document.querySelectorAll("[data-operator]");
const numberBtn = document.querySelectorAll("[data-number]");

let currentScreenNumber = document.querySelector('.current-number');
let previousScreenNumber = document.querySelector('.previous-number');


// Assign Numbers

numberBtn.forEach((button) =>
    button.addEventListener ('click', () => addNumber(button.textContent))
    );

    function addNumber(a) {

        if (currentScreenNumber.innerHTML === '0') {   

        resetDisplay();

        currentScreenNumber.innerText += a;

        } else if (currentOperation === null) {

            currentScreenNumber.innerText += a;

            firstOperand = currentScreenNumber.innerHTML;

        } else if (currentScreenNumber.innerHTML === firstOperand) {
            
            resetDisplay();

            currentScreenNumber.innerText += a;

            previousScreenNumber.innerHTML = `${firstOperand} ${currentOperation}`;

        } else {

            currentScreenNumber.innerText += a;

            secondOperand = currentScreenNumber.innerHTML;
        }
    };


    function resetDisplay() {
        currentScreenNumber.innerText = '';
    }

    // Assign Operator

    operatorBtn.forEach((button) =>
    button.addEventListener('click', () => addOperator(button.textContent))
    );

    function addOperator(a) {
        if (currentOperation !== null) {
            equation(firstOperand, currentOperation, secondOperand)
        } else {
            currentOperation = a;
        }
    }



    // Equations

    function add(a , b) {
        result = a + b ;
        currentScreenNumber.innerText = result;
        previousScreenNumber.innerHTML = `${firstOperand} ${currentOperation} ${secondOperand} =`;
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
        result = a / b ;
    }



    // Decides which function to run

    function equation(a, c, b) {

        a = Number(a);
        b = Number(b);

        switch(c) {
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
                break;
        }
    }

    //Clear

    function clearAll() {
        firstOperand = '';
        secondOperand = '';
        
        currentOperation = null;
        
        operationPreform = false;

        currentScreenNumber.innerHTML = '0';
        previousScreenNumber.innerHTML = '';

    }


    // Extra effect

    const tiltSettings = {
        max: 15,
        perspective: 2500,
        scale: 1.05,
    }
    
    
    const cards = document.querySelectorAll(".numbers");
    
    cards.forEach(card => {
        card.addEventListener("mousemove", cardMouseMove);
        card.addEventListener("mouseleave", cardMouseLeave);
    
    });
    
    function cardMouseMove(event) {
    
        const card = event.currentTarget;
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth / 2;
        const centerY = card.offsetTop + cardHeight / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        const rotateX = ((-1)*tiltSettings.max*mouseY/(cardHeight/2)).toFixed(2);
        const rotateY = ((1)*tiltSettings.max*mouseX/(cardWidth/2)).toFixed(2);
    
        card.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltSettings.scale}, ${tiltSettings.scale}, ${tiltSettings.scale})`;
    }
    
    
    function cardMouseLeave(event) {
        event.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }