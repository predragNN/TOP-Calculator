//Step 1 - creating basic functions
function add(num1, num2){
    return num1 + num2;
}
function subb(num1, num2){
    return num1 - num2;
}
function multi(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if(num1 === 0  || num2 === 0) 
        return "undefined";
    else 
        return num1 / num2;
}

//Step 2 - creating 3 variables, fist/second number and operator
let firstNumber = "";
let operator = "";
let secondNumber = "";

//Step 3 - operate function
function operate(num1, operation, num2){
    let floatNum1 = parseFloat(num1);
    let floatNum2 = parseFloat(num2);
    switch(operation){
        case "+":
            return add(floatNum1, floatNum2);
        case "-":
            return subb(floatNum1, floatNum2);
        case "*":
            return multi(floatNum1, floatNum2);
        case "/":
            return divide(floatNum1, floatNum2);
        default:
            break;
    }
}

//Step 5 - populate display when clicking on a number button
let value = "";
let expression = ""
let expression_value=document.querySelector(".expression-value");
let numberButtons = document.querySelectorAll(".operand");
let operations = document.querySelectorAll(".operator");
let displayValue = document.querySelector(".result-value");
let equalsBtn = document.getElementById("equals");
let resetBtn = document.getElementById("reset");


function display(){
    displayValue.innerHTML = value;
}
function displayExpression(){
    expression_value.innerHTML = expression;
}
function clearAll(){
    value = "";
    firstNumber = "";
    secondNumber = "";
    expression = "";
    operator = "";
    //display(value);
}

numberButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        if(operator === "" && firstNumber === ""){
            displayExpression(expression);
            firstNumber+=button.value;
            value = firstNumber;
        }
        else{
            secondNumber+=button.value;
            value = secondNumber;
        }
        display(value);
    });
});

operations.forEach(button => {
    button.addEventListener("click", () => {
        if (operator === "" && firstNumber !== "") {
            operator = button.value;
            expression = firstNumber + " " + operator;
            displayExpression(expression);
        } else if (operator !== "" && secondNumber !== "") {
            expression = firstNumber + " " + operator + " " + secondNumber;
            value = operate(firstNumber, operator, secondNumber);
            display(value);
            displayExpression(expression);
            firstNumber = value;
            secondNumber = "";
            operator = button.value;
            expression = firstNumber + " " + operator;
        }
    });
});

equalsBtn.addEventListener("click",()=>{
    if(firstNumber !== "" && secondNumber !== "" && operator !== ""){
        value = operate(firstNumber, operator, secondNumber);
        expression = firstNumber + " " + operator + " " + secondNumber + " = ";
        display(value); 
        displayExpression(expression); 
        clearAll();
    }
    else{
        display("Error");
        clearAll();
    }
});

resetBtn.addEventListener("click", ()=>{
    clearAll();
    displayExpression();
    display();
});