import { Router } from "express";

const helloWorld = Router();

helloWorld.get("/", (req, res, next) => {
  res.send("olá mundo");
});

export { helloWorld };
