function abrirRegalo(event){
  const image = event.currentTarget;
  image.src = "https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif";


const mensaje = document.querySelector("h1");
// O en su defecto usar Element.innerHTML
mensaje.textContent = "Felicidades";

image.removeEventListener("click", abrirRegalo);
}

const image = document.querySelector("img");
image.addEventListener("click", abrirRegalo);
