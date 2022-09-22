import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { CartProvider } from "./contexts/Cart/cart.context";
import { LoginProvider } from "./contexts/Login/login.context";
import { ProductProvider } from "./contexts/Product/product.context";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
