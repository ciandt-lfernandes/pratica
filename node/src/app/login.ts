import { Router } from "express";
import { ILogin } from "../domain/interfaces/login";
import { autenthicate } from "../domain/login.usecase";
import { getUserByEmail } from "../infra/repositories/user.repository";

const route = Router();

route.post("/login", async (req, res) => {
  const user = await autenthicate({ getUserByEmail }, req.body as ILogin);
  if (user) {
    res.json(user).status(200);
  }
  res.sendStatus(401);
});

export { route as login };
