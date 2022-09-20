import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { CartProvider } from "./contexts/Cart/cart.context";
import { LoginProvider } from "./contexts/Login/login.context";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CartProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </CartProvider>
  </React.StrictMode>
);
