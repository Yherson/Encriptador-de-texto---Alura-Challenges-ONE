import { restablecerValores } from "./reset.js";
import { encriptarTexto, desencriptarTexto } from "./encriptacion.js";

window.onload = () => {
  restablecerValores(input, resultado, botonCopiar);
};

window.addEventListener("load", () => {
  if (localStorage.getItem("resultado")) {
    localStorage.removeItem("resultado");
  }
  restablecerValores();
});

const botonEncriptar = document.getElementById("btnEncriptar");
const botonDesencriptar = document.getElementById("btnDesencriptar");
const botonCopiar = document.getElementById("btnCopiar");
const resultado = document.getElementById("result");
const input = document.getElementById("texto-entrada");
const inputSaved = localStorage.getItem("resultado") || "";

const resultContentDefault = `
  <div>
    <img src="img/muneco.png" alt="encriptando_texto">
    <h2>Ningún mensaje fue encontrado</h2>
    <p>Ingresa el texto que desees encriptar o desencriptar.</p>
  </div>
`;
const setResult = (text) => {
  if (!text) {
    resultado.innerHTML = resultContentDefault;
    localStorage.removeItem("resultado");
  } else {
    resultado.innerHTML = `<h2 class="resultText">${text}</h2>`;
    localStorage.setItem("resultado", text);
  }

  if (resultado.innerHTML.trim() === resultContentDefault.trim()) {
    botonCopiar.style.display = "none";
  } else {
    botonCopiar.style.display = "block";
  }
};

const updateInput = () => {
  input.value ? localStorage.setItem("resultado", input.value) : localStorage.removeItem("resultado");
};

const encryptSubmit = () => {
  const textoNormal = input.value;
  const textoEncriptado = encriptarTexto(textoNormal);
  setResult(textoEncriptado);
};

const decryptSubmit = () => {
  const textoEncriptado = input.value;
  const textoDesencriptado = desencriptarTexto(textoEncriptado);
  setResult(textoDesencriptado);
};

const copyText = () => {
  const resultText = resultado.innerText;
  navigator.clipboard.writeText(resultText);
  botonCopiar.innerText = "Copiado";
  setTimeout(() => {
    botonCopiar.innerText = "Copiar";
  }, 1000);
};

botonEncriptar.addEventListener("click", encryptSubmit);
botonDesencriptar.addEventListener("click", decryptSubmit);
botonCopiar.addEventListener("click", copyText);
input.addEventListener("input", updateInput);

if (inputSaved) input.value = inputSaved;
if (!localStorage.getItem("resultado")) botonCopiar.style.display = "none";
setResult(localStorage.getItem("resultado"));

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("resultado");
});
