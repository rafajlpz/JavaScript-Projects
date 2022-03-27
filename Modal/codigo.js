"use strict";

const btnAbrir = document.querySelector(".boton-abrir-modal");
const modal = document.querySelector('.modal');
const btnCerrar = document.querySelector(".cerrar-modal");
// document.querySelector(".abrir-modal")

const abrirFicha = btnAbrir.onclick = () => {
    // btnAbrir.className("modal").style.display = "flex"
    modal.classList.add('modal')
}

const cerrarFicha = btnCerrar.onclick = () =>{
    modal.classList.remove('modal')
}
