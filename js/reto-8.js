//8. Triángulos: for
//Confeccionar un programa que lea n pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo.
//El programa deberá informar:
//a) De cada triángulo la medida de su base, su altura y su superficie.
//b) La cantidad de triángulos cuya superficie es mayor a 12.

const triangulos = parseInt(prompt("Ingrese las medidas de los triangulos"));
let cantidad = 0;
for (i = 0; i < triangulos; i++) {
  const base = parseInt(prompt("Ingrese el valor de la base"));
  const altura = parseInt(prompt("Ingrese el valor de la altura"));
  const superficie = (base * altura) / 2;
  alert(`La superficie es ${superficie}`);
  if (superficie > 12) {
    cantidad++;
  }
}
alert(`La cantidad de triangulos con superficies mayores a 12 es: ${cantidad}`);
