import './index.css';
import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

const tree = (
  <HashRouter>
    <App />
  </HashRouter>
);

const Wrapper = import.meta.env.MODE === 'development' ? Fragment : React.StrictMode;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Wrapper>{tree}</Wrapper>
);
