import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { LoginProvider } from "./contexts/Login/login.context";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);
