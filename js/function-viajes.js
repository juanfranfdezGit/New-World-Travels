// FUNCION ACTIVAR/DESACTIVAR GALERIA

const galeria = document.querySelector(".galeria-grid");
const boton = document.querySelector (".galeria");
const cerrar = document.querySelector(".galeria-grid h1")

boton.addEventListener("click", function(){
    galeria.classList.add("activo");
})

cerrar.addEventListener("click", function (){
    galeria.classList.remove("activo");
})