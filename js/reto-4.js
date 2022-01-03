//4. Serie de 25: while
//Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado)

let terminos = 1;
let serie = 11;

while (terminos <= 25) {
  console.log(serie);
  serie = serie + 11;
  terminos++;
}