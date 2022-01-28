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


console.log(animal);
console.log(tienda);

console.log(nuevoObj);