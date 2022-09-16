import { Router } from "express";
import { ILogin } from "../domain/interfaces/login";
import { autenthicate } from "../domain/loginUseCase";

const login = Router();

login.post("/login", (req, res) => {
  if (autenthicate(req.body as ILogin)) {
    res.sendStatus(200);
  }
  res.sendStatus(401);
});

export { login };
