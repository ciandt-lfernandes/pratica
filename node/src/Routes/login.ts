import { Router } from "express";
import { ILogin } from "../domain/interfaces/login";
import { autenthicate } from "../domain/loginUseCase";

const login = Router();

login.post("/login", (req, res) => {
  const user = autenthicate(req.body as ILogin);
  if (user) {
    res.send(user).status(200);
  }
  res.sendStatus(401);
});

export { login };
