const url1 = "https://jsonplaceholder.typicode.com/photos";
const url2 = "https://jsonplaceholder.typicode.com/comments";

const myFunction = async () => {
  const inicio = performance.now();

  const resp = await fetch(url1);
  const result = await resp.json();
  console.log(result);

  const resp2 = await fetch(url2);
  const result2 = await resp2.json();
  console.log(result2);

  const fin = performance.now();
  console.log(`1 Async: ${fin - inicio}ms`);
};

myFunction();


const myFunction2 = async () => {
  const inicio = performance.now();
  const [resp1, resp2] = await Promise.all([fetch(url1), fetch(url2)]);

  const result1 = await resp1.json();
  const result2 = await resp2.json();

  console.log(result1);
  console.log(result2);
  const fin = performance.now();
  console.log(`2 Async: ${fin - inicio}ms`);
};

myFunction2();
