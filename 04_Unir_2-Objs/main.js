const animal = {
  nombre: "Gato",
  precio: 150000,
  disponible: true,
};

const tienda = {
  nombre: "Laika",
  abierto: true,
};

const nuevoObj = {
  animal: { ...animal },
  tienda: { ...tienda },
};

console.log(nuevoObj);

console.log(animal);
console.log(tienda);
