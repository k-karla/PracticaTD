// Buscar el botón por su id
const boton = document.getElementById("boton");

// Escuchar el clic
boton.addEventListener("click", () => {
  // Cambiar el color de fondo de la página
  document.body.style.backgroundColor = "#1f9a8e33";
  // Cambiar el texto del botón
  boton.textContent = "¡Color cambiado!";
});

