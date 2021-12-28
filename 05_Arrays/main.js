const techs = ["React", "Redux", "Next", "Gatsby", "Tailwind"];

// Agregar elementos
techs.push("Graphql"); // Agrega al final del array
techs.unshift("JavaScript"); // Agrega al inicio del array

const newArray = [...techs, "NodeJs"]; // Agrega elementos recomendado para React

// Eliminar Elementos
techs.pop(); // Elimina el ultimo elemento del array
techs.shift(); // Elimina el primer elemento del array
techs.splice(3); // Elimina desde la posicion 2 en adelante
techs.splice(1, 1); // Elimina desde la posicion 1, 1 elemento

const resultArray = newArray.filter((i) => {
  return i !== 'React'
});

console.log(techs);
console.log(newArray);
console.log(resultArray);
console.log(techs.length);
