
export function restablecerValores(input, resultado, botonCopiar) {

    input.value = '';
  
    resultado.innerHTML = resultContentDefault;
  
    botonCopiar.style.display = "none";
  
    localStorage.removeItem("resultado");
  }