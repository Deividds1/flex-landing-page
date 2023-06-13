const nav = document.querySelector(".secondnav");
const burger = document.getElementById("burguer");
const header = document.querySelector(".fixed-top");
const link = document.querySelector(".hamburguesa1");
const link2 = document.querySelector(".hamburguesa2");
const link3 = document.querySelector(".hamburguesa3");

nav.style.display = "none";

link.addEventListener('click', cerrar);
link2.addEventListener('click', cerrar);
link3.addEventListener('click', cerrar);
window.addEventListener('resize', cerrar);

burger.addEventListener('click', desplegar);



function desplegar() {

    console.log(nav.style.display);

    switch (nav.style.display) {



        case "none":
            console.log("block-relative");
            nav.style.display = "block";
            header.style.position = "sticky";
            break;

        case "block":
            console.log("none-fixed");
            nav.style.display = "none";
            header.style.position = "fixed";

            break;


    }



};

function cerrar() {
    console.log("cerrar");
    nav.style.display = "none";
    header.style.position = "fixed";
};
