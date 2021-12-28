const tecnos = [
  "React",
  "Redux",
  "Next",
  "Gatsby",
  "JavaScript",
  "Tailwind",
  "Graphql",
  "NodeJs",
];

// forEach te permite iterar pero No permite crear un nuevo arreglo
tecnos.forEach((i, j) => {
  console.log(`${j + 1}: ${i}`);
});

// map te permite iterar y Si te permite crear un nuevo arreglo
const mapArray = tecnos.map((i) => {
  return i;
});
console.log(mapArray);

// includes verifica si existe un elemento dentro del array
const busqueda = tecnos.includes("React");
console.log(busqueda);

// some verifica si al menos uno de los elementos del array cumple con una condicion
const busqueda2 = tecnos.some((i) => i.length > 5);
console.log(busqueda2);

// find devuelve el primer elemento que cumpla con la condicion
const busqueda3 = tecnos.find((i) => i.length > 9);
console.log(busqueda3);

// every verifica si todos los elementos de una array cumplen con la condicion
const busqueda4 = tecnos.every((i) => i.length >= 5);
console.log(busqueda4);

// reduce suma los elementos de un array
const precios = [100, 50, 20, 40, 60, 10, 50];
const result = precios.reduce((total, numero) => total + numero, 0);
console.log(result);

// filter devuelve un array con los elementos que cumplan con la condicion
const busqueda5 = precios.filter((i) => i < 60);
console.log(busqueda5);
