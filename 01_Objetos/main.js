const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

console.table(producto);

// Destructuring

const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);

// Object Literal Enhacement

const autenticado = false;
const usuario = "Mauricio P.";

const nuevoObj = {
  autenticado,
  usuario,
};

console.log(nuevoObj);
