// comandos
let firstNumber = '';
let secondNumber = '';
let operation = '';
let isSecond = false;

const input = document.getElementById('input');
const opDisplay = document.getElementById('operation');
const btnContainer = document.getElementById('buttons-numbers');
// creamos botones numericos
for (let i = 1; i <= 9; i++) {
  const btn = document.createElement('button');
  btn.className = 'btn btn-outline-primary';
  btn.textContent = i;
  btn.onclick = () => appendNumber(i);
  btnContainer.appendChild(btn);
}
