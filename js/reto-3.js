//3. Sueldos de personal: while
//En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.

const cantEmpleados = parseInt(prompt("Ingrese una cantidad de empleados"));
let cobranMucho = 0;
let cobranPoco = 0;
let total = 0;
let i = 1;
while (i <= cantEmpleados) {
  const sueldo = parseInt(prompt("Ingrese el sueldo"));
  if (sueldo >= 100 && sueldo <= 300) {
      cobranPoco++;
  }else {
      cobranMucho++
  }
  total = total + sueldo
  i++;
}
alert(`Los empleados que cobran mucho son:${cobranMucho}, los que cobran poco son: ${cobranPoco} y el sueldo total es: ${sueldo}`)