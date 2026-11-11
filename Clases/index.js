import Estudiante from "./estudiante.js";

let estudiante = new Estudiante();
estudiante.nombre = "Regina";
estudiante.carrera = "ISW";

console.log(estudiante);
console.log(estudiante.saludar());
console.log(estudiante.verPromedio());