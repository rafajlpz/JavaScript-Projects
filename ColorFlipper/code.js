"use strict";

// Array para generar el codigo nuevo y que de como resultado un nuevo color.
const nuevoColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Cogemos el boton y el span color para que cambie el codigo de color en html
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

// Boton para coger el click y que haga un bucle for
btn.onclick = () => {
  let nColor = "#";
  for (let i = 0; i < 6; i++) {
    nColor += nuevoColor[getRandomNumber()];
  }

  color.textContent = nColor;
// Cogemos dentro de las etiquetas HTML y CSS y le damos el valor de nColor
  document.body.style.backgroundColor = nColor;
};

// Funcion para que devuelva un numero aleatorio con floor y random. Se usa .length para que lea el array nuevoColor
const getRandomNumber = () => {
  return Math.floor(Math.random() * nuevoColor.length);
};
