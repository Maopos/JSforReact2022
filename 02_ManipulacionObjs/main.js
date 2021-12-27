const product = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

// No permite modificar, ni añadir, ni eliminar propiedades...
//Object.freeze(product);

// Permite modificar propiedades, pero no permite añadir, ni eliminar propiedades...
//Object.seal(product);

// Reasignar valores
product.nombre = "Monitor";

// Agregar propiedad
product.width = 32;

// Eliminar prpiedad
delete product.disponible;

console.log(product);
