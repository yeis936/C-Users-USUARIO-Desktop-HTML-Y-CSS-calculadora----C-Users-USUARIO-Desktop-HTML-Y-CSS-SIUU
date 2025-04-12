var pantalla = document.getElementById("pantalla");
function mostrar(valor){
  pantalla.value += valor; /* Agrega el valor al final de la pantalla */
}
function eliminar(){
    pantalla.value = ""; /* Limpia la pantalla */
}
function calcular(){
  try {
    pantalla.value = eval(pantalla.value); /* Evalua la expresión y muestra el resultado */
  } catch (error) { /* Captura errores en la expresión */
    pantalla.value = "Error"; /* Muestra un error si la expresión es inválida */
  }
  let resultado = eval(pantalla.value); /* Evalua la expresión y muestra el resultado */
  pantalla.value = resultado; /* Muestra el resultado en la pantalla */
 
  if (resultado < 0 ) { 
    alert("el resultado es negativoo")
  } else if (resultado  > 0){ 
        alert("el resultado es positivo")
  }
}



