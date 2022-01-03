// 6. Dos listas: while
// Realizar un programa que permita cargar dos listas de 15 valores cada una.
// Informar con un mensaje cuál de las dos listas tiene un valor acumulado mayor (mensajes "Lista 1 mayor", "Lista 2 mayor", "Listas iguales")
// Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.

const listaUno = [];
const listaDos = [];
let i1 = 1;
let i2 = 1;

while (i1 <= 15) {
  const valor = parseInt(prompt("Ingrese los valores de la primera lista"));
  listaUno.push(valor);
  i1++;
}

while (i2 <= 15) {
  const valor = parseInt(prompt("Ingrese los valores de la Segunda lista"));
  listaDos.push(valor);
  i2++;
}

const sumalistaUno = listaUno.reduce((a, b) => a + b);
const sumalistaDos = listaDos.reduce((a, b) => a + b);

if (sumalistaUno === sumalistaDos) {
  alert("Ambas listas son iguales");
} else if (sumalistaUno > sumalistaDos) {
  alert("Lista 1 mayor");
} else if (sumalistaUno < sumalistaDos) {
  alert("Lista 2 mayor");
}
