// const element = document.createElement("h1");
// element.innerText = "Hola este es mi proyecto!";

// const container = document.getElementById("app");

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

//const jsx = < h1 > Hola este es mi proyecto en react < /h1>;
// const element = React.createElement("h1", {}, "Hola soy los children");
// const link = React.createElement(
//     "a", { href: "https://www.facebook.com" },
//     "Ir a facebook"
// );
const name = "Edwin";
//const element = React.createElement("h1", {}, `Hola soy ${name}`);

// const sum = () => 3 + 3;
// const jsx = < h1 > Hola soy,
//     {sum()} < /h1>;

const jsx = (
  <div>
    <h1>Hola soy {name}</h1>
    <p>Soy Ingeniero de Sistemas</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola soy Edwin"),
  React.createElement("p", {}, "Soy Ingeniero de Sistemas")
);
const container = document.getElementById("app");

// ReactDOM.render(_que__, __donde__) // Dos argumentos, 1. que queremos renderizar, y donde vamos a renderizar

ReactDOM.render(element, container);
