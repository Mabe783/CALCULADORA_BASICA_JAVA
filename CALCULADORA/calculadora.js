/*variables de entrada desde línea 2-6*/
// comandos 
let firstNumber = '';//Almacena el PRIMER número de la operación a realizar
let secondNumber = ''; //Almacena el SEGUNDO número de la operación a realizar
let operation = ''; //Almacena el signo para la operación a realizar
let isSecond = false; //función booleana para verificar si existe el segundo número

/*Elementos del DOM*/
const input = document.getElementById('input');// elementos de entrada y resultados
const opDisplay = document.getElementById('operation'); // muestra la operación en desarrollo
const btnContainer = document.getElementById('buttons-numbers');


/*Función Agregar número*/
function appendNumber(num) { //desde la línea 15-23 cumple la función es llamada cuando el usuario selecciona un botón numérico 
  if (!isSecond) {
    firstNumber += num; //primer número que se va a añadir
    input.value = firstNumber;
  } else {
    secondNumber += num; //segundo número que se va a añadir
    input.value = secondNumber; // actualiza el valor
  }
}

/*Función Elegir Operación */
function chooseOperation(op) { //esta función se activa cuando se seleciona un botón de operación
  if (firstNumber === '') return; //validación si hay números y si no no sucede nada, esta función evita errores
  operation = op; //guarda el signo de operación
  isSecond = true; //indica al usuario que ingrese el segundo valor para realizar la operación
  input.value = '';// limpia la pantalla
  opDisplay.textContent = `Operación: ${operation}`; //actualiza el div de la operación
}

/* Función Calcular*/
function calculate() { //cumple la función de realizar los cálculos matemáticos referente a números selecionados y y el operador 
  if (firstNumber === '' || secondNumber === '' || operation === '') return;
  let result; // almacena el resultado de la operación
  const num1 = parseFloat(firstNumber);//primer número 
  const num2 = parseFloat(secondNumber);// segundo número 

  switch (operation) { //casos de operaciones 
    case '+':
      result = num1 + num2;//suma
      break;
    case '-':
      result = num1 - num2;//resta
      break;
    case '*':
      result = num1 * num2;//multiplicación
      break;
    case '/': //caso división
      if (num2 === 0) {
        input.value = "Error";
        opDisplay.textContent =("No se puede dividir entre cero");// alerta que no se divide para cero, el resultado es error
         firstNumber = ''; //ingresamos el primer número 
         secondNumber = '';//ingresamos el segundo número 
         operation = ''; //ingresamos el digito de operación
         isSecond = false; //permite conocer si el usuario está ingresando el primer o segundo número 
        return;
      }
      result = num1 / num2;//división para un valor válido
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

/*Función Limpiar */
function clearAll() {//restablece la calculadora o limpia los valores digitados
  firstNumber = ''; //primer número
  secondNumber = '';//segundo número
  operation = '';//signo de operación
  isSecond = false;//permite conocer si el usuario stá ingresando el primer o segundo número 
  input.value = ''; //limpia el contenido de la pantalla de la calculadora
  opDisplay.textContent = ''; //limpia el texto de operación resultante
}