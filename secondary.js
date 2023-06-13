const form = document.querySelector('.cuadrado');
const section = document.getElementById('box');
const cancel = document.querySelector('.material-symbols-outlined');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    section.style.display = 'flex';

});

cancel.addEventListener('click', cerrar);

function cerrar() {
    console.log("cerrar");
    section.style.display = "none";

};