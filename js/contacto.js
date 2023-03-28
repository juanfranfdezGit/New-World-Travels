const enviar = document.querySelector(".submit");
const check = document.querySelector("i");
const enviada = document.querySelector(".enviada")

enviar.addEventListener("click", () => {
	enviada.classList.add("envia");
})

check.addEventListener("click", () => {
	enviada.classList.remove("envia");
})