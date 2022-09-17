import { Router } from "express";
import { ILogin } from "../domain/interfaces/login";
import { autenthicate } from "../domain/loginUseCase";

const login = Router();

login.post("/login", async (req, res) => {
  const user = await autenthicate(req.body as ILogin);
  if (user) {
    res.json(user).status(200);
  }
  res.sendStatus(401);
});

export { login };
