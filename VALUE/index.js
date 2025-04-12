function mostrarNombre() {

var nombre = document.getElementById("nombre").value;

var edad = document.getElementById("edad").value;

var telefono = document.getElementById("telefono").value;  

document.getElementById("parrafo").innerText = "Hola " + nombre + " tu edad es " + edad + " años " + " y tu telefono es: " + telefono;

alert("hola " + nombre + " tu edad es " + edad + " años " + " y tu telefono es: " + telefono);  

}
