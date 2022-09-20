import { Router } from "express";
import { login } from "./login/login.controller";
import { product } from "./products/product.controller";

const routes = Router();

routes.use(login);
routes.use(product);

export { routes };
