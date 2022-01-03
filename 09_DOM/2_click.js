const heading = document.querySelector(".heading");

heading.addEventListener("click", () => {
  heading.textContent = "Nuevo Heading...";
});

const enlaces = document.querySelectorAll(".navegacion a");

enlaces.forEach((i) => {
  i.addEventListener("click", () => {
    console.log(i.textContent);
  });
});
