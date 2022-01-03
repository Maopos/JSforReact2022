const heading = document.querySelector("h2");

heading.textContent = "MANIPULANDO EL DOM";

console.log(heading);

const enlaces = document.querySelectorAll(".navegacion a");

enlaces.forEach((i, j) => (i.textContent = "Nuevo_Enlace " + (j + 1)));

console.log(enlaces);

const nombre = document.querySelector("#nombre");

nombre.value = "Valor por default...";

console.log(nombre);
