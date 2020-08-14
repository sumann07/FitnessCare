import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {BrowserRouter} from "@zumper/react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
  </BrowserRouter>,
  rootElement
);
