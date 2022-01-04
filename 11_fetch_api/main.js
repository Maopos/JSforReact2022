const url = "https://jsonplaceholder.typicode.com/comments";

fetch(url)
  .then((res) => res.json())
  .then((result) => {
      result.forEach(i => {
          document.write(`${i.id} - "${i.body}." <br/> Autor: ${i.name}. <br/><br/>`);
          console.log(i);
          
      });
  });
