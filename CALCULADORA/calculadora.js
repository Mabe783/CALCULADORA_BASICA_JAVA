// comandos
let firstNumber = '';
let secondNumber = '';
let operation = '';
let isSecond = false;

const input = document.getElementById('input');
const opDisplay = document.getElementById('operation');
const btnContainer = document.getElementById('buttons-numbers');



function appendNumber(num) {
  if (!isSecond) {
    firstNumber += num;
    input.value = firstNumber;
  } else {
    secondNumber += num;
    input.value = secondNumber;
  }
}

function chooseOperation(op) {
  if (firstNumber === '') return;
  operation = op;
  isSecond = true;
  input.value = '';
  opDisplay.textContent = `Operación: ${operation}`;
}

function calculate() {
  if (firstNumber === '' || secondNumber === '' || operation === '') return;
  let result;
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert("No se puede dividir entre cero");
        return;
      }
      result = num1 / num2;
      break;
    default:
      return;
  }

  input.value = result;
  opDisplay.textContent = '';
  firstNumber = result.toString();
  secondNumber = '';
  operation = '';
  isSecond = false;
}

function clearAll() {
  firstNumber = '';
  secondNumber = '';
  operation = '';
  isSecond = false;
  input.value = '';
  opDisplay.textContent = '';
}