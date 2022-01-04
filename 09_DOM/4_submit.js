const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = document.getElementById("nombre");
  let password = document.getElementById("password");

  // Remover alerta previa
  const alertaPrevia = document.querySelector(".alerta");
  if (alertaPrevia) {
    alertaPrevia.remove();
  }

  const alerta = document.createElement("DIV");
  // Agregar id
  alerta.id = "Hola";
  // Agregar class
  alerta.classList.add("alerta");

  if (nombre.value === "" || password.value === "") {
    alerta.textContent = "Debes llenar todos los campos...";
    alerta.classList.add("error");
  } else {
    alerta.textContent = "Ingresaste correctamente...";
    alerta.classList.add("exito");
    console.log(nombre.value);
    console.log(password.value);

    nombre.value = "";
    password.value = "";
  }

  formulario.appendChild(alerta);
});
