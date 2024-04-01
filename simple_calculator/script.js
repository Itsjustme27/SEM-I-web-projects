let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));
let result = document.getElementById('result');
let operator = " ";
operator = prompt("Enter the operator (+, -, *, /)");

switch(operator){
    case '+':
        result.innerHTML = `<p>Number 1: ${num1}</p> <p>Number 2: ${num2}</p> Sum: ${num1+num2}`;
        break;
    case '-':
        result.innerHTML = `<p>Number 1: ${num1}</p> <p>Number 2: ${num2}</p>Difference: ${num1-num2}`;
        break;
    case '*':
        result.innerHTML = `<p>Number 1: ${num1}</p> <p>Number 2: ${num2}</p>Multiplication: ${num1*num2}`;
        break;
    case '/':
        result.innerHTML = `<p>Number 1: ${num1}</p> <p>Number 2: ${num2}</p>Division: ${num1/num2}`;
        break;
    default:
        alert("Invalid Operator! Please enter +, -, * or /.");
}
