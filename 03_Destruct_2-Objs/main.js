const item = {
  nombre: "Teclado",
  precio: 450,
  disponible: true,
};

const cliente = {
  nombre: "Mauricio",
  premium: true,
};

const { nombre, precio, disponible } = item;
const { nombre: nombreCliente, premium } = cliente;

console.log(nombre, precio, disponible, nombreCliente, premium);
