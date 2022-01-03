// 5. Múltiplos de 8: while
//Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 - 16 - 24, etc.

let inicio = 2;
let multiplo = 8;

while (multiplo <= 500) {
  console.log(multiplo);
  multiplo = 8 * inicio;
  inicio++;
}
