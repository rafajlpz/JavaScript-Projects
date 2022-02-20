"use strict";

// Buttons and counter text
const contador = document.querySelector("#counter");
const botones = document.querySelectorAll(".btn");

// Iniciar el la variable contador
let count = 0;

botones.forEach((btn) => {
  btn.onclick = (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++
    } else if (styles.contains("decrease")) {
      count--
    } else {
      count = 0;
    }

    if (count > 0) {
      contador.style.color = "green"
    } else if (count < 0) {
      contador.style.color = "red"
    } else if (count == 0) {
      contador.style.color = "grey"
    }

    contador.textContent = count;
  }
});
