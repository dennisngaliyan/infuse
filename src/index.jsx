import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextHandler from "./context/context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextHandler>
      <App />
    </ContextHandler>
  </React.StrictMode>
);
