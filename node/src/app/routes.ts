import { Router } from "express";
import { helloWorld } from "./helloWorld";
import { login } from "./login";
import { product } from "./products/product";

const routes = Router();

routes.use(login);
routes.use(helloWorld);
routes.use(product);

export { routes };
