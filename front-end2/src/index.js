import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css'
import "./assets/css/styles.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './assets/css/global'
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
