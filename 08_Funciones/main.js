const suma = (a, b) => {
  return ["suma", a + b];
};

const [operacion, resultado] = suma(2, 3);

console.log(operacion);
console.log(resultado);
