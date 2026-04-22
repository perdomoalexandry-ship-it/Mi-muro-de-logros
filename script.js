function cambiar(imagen) {
document.getElementById("foto").src = imagen;
}

let titulo = document.getElementById("titulo");
let tamaño = 42;
let subir = true;

setInterval(function () {
titulo.style.fontSize = tamaño + "px";

if (subir) {
tamaño++;
} else {
tamaño--;
}

if (tamaño == 48) {
subir = false;
}

if (tamaño == 42) {
subir = true;
}
}, 100);