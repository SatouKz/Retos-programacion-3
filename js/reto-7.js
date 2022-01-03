//7. Pares e Impares: while
//Desarrollar un programa que permita cargar n números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
//Emplear el operador “%” en la condición de la estructura condicional:
//if (valor % 2 === 0)         //Si el if da verdadero es par.

let par = 0;
let impar = 0;
let i = 1;
const numEntero = parseInt(prompt('Ingrese "n" cantidad de numeros enteros'));

while (i <= numEntero) {
  const valor = parseInt(prompt("ingrese los valores"));
  if (valor % 2 === 0) {
    par++;
  } else {
    impar++;
  }
  i++;
}

alert(`La cantidad de números pares es de: ${par} y de números impares es de: ${impar}`);
