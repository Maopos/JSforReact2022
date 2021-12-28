const tecnos = [
  "JavaScript",
  "React",
  "Redux",
  "Next",
  "Gatsby",
  "Tailwind",
  "Graphql",
  "NodeJs",
];


// forEach te permite iterar pero No permite crear un nuevo arreglo
const forEachArray = tecnos.forEach((i) => {
  return i;
});


// map te permite iterar y Si te permite crear un nuevo arreglo
const mapArray = tecnos.map((i) => {
  return i;
});

console.log(forEachArray);
console.log(mapArray);
