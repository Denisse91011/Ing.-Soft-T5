import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js"; 

const sumarForm = document.querySelector("#sumar-form");
const multiplicarForm = document.querySelector("#multiplicar-form");
const resultadoDiv = document.querySelector("#resultado-div");


sumarForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  
  const firstNumber = parseFloat(document.querySelector("#sumar-form input[name='numero1']").value);
  const secondNumber = parseFloat(document.querySelector("#sumar-form input[name='numero2']").value);
  
  resultadoDiv.innerHTML = `<p>Resultado: ${sumar(firstNumber, secondNumber)}</p>`;
});


multiplicarForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const firstNumber = parseFloat(document.querySelector("#multiplicar-form input[name='numero1']").value);
  const secondNumber = parseFloat(document.querySelector("#multiplicar-form input[name='numero2']").value);
  
  resultadoDiv.innerHTML = `<p>Resultado: ${multiplicar(firstNumber, secondNumber)}</p>`;
});
