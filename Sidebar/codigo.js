"use strict";

const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

const MonstrarSidebar = () => {
  toggleBtn.onclick = () => {
    console.log(sidebar.classList);
    // if (sidebar.classList.contains("show-sidebar")) {
    //   sidebar.classList.remove("show-sidebar");
    // } else {
    //   sidebar.classList.add("show-sidebar");
    // }
    sidebar.classList.add("show-sidebar");
  };
};

const cerrarBoton = () => {
  closeBtn.onclick = () => {
    sidebar.classList.add("show-sidebar");
  };
};

cerrarBoton();
MonstrarSidebar();
