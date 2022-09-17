import { Router } from "express";
import { helloWorld } from "./helloWorld";
import { login } from "./login";

const routes = Router();

routes.use(login);
routes.use(helloWorld);

export { routes };
