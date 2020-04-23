import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
const container = document.getElementById("app");
ReactDOM.render(
  <Badge
    firstName="Dennys"
    lastName="Belduma"
    jobTitle="Developer"
    avatar="https://www.gravatar.com/avatar?d=identicon"
    twtter="edwineverth94"
  />,
  container
);
