const url = "https://jsonplaceholder.typicode.com/posts";

const myFuncion = () => {
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      console.log(result, 'then');
    });
};
myFuncion();

const myAsyncFuncion = async () => {
  const res = await fetch(url);
  const result = await res.json();

  console.log(result, 'asyn - await');
};
myAsyncFuncion();
