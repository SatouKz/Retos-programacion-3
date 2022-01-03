//9. Los últimos 5: for
//Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los últimos 5 valores ingresados.

suma = 0
for(f = 1; f <= 10; f++) {
  const valor = parseInt(prompt('Ingrese un valor'))
  if(f > 5){
    suma = suma + valor
  }
}
console.log(`La suma de los ultimos 5 valores es de: ${suma}`)