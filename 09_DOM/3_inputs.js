const nombre = document.getElementById("nombre");
const password = document.getElementById("password");

nombre.addEventListener("input", (e) => {
  console.log(e.target.value);
});

password.addEventListener("input", () => {
  password.type = "text";

  setTimeout(() => {
    password.type = "password";
  }, 500);
});
