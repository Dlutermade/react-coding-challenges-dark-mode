import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import Routes from "./routes";

ReactDOM.render(
  <AppContainer>
    <Routes page="Home" />
  </AppContainer>,
  document.getElementById("root")
);
