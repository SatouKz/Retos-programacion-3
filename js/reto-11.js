//11. Tabla a elección: for
//Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 13 términos)

const num = parseInt(prompt("Ingrese un numero del 1 al 10"));
let multiplicador = 1;
if (num <= 10) {
  for (let i = 1; i <= 13; i++) {
    const multiplo = num * multiplicador;
    multiplicador++;
    console.log(multiplo);
  }
}
