//2. Altura n: while
//Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las personas.

const cantAltura = parseInt(prompt("Ingrese la cantidad de alturas"));
let promedio = 0;
let i = 1;
while (i <= cantAltura) {
  const altura = parseInt(prompt("Ingrese la altura"));
  promedio = promedio + altura;
  i++;
}
alert(`La altura promedio es: ${promedio / cantAltura}`);
