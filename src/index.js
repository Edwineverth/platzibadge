// const element = document.createElement("h1");
// element.innerText = "Hola este es mi proyecto!";

// const container = document.getElementById("app");

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

const element = < h1 > Hola este es mi proyecto en react < /h1>;

const container = document.getElementById("app");

// ReactDOM.render(_que__, __donde__) // Dos argumentos, 1. que queremos renderizar, y donde vamos a renderizar

ReactDOM.render(element, container);