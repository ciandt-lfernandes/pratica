import { Router } from "express";
import { ILogin } from "./login.request";
import { autenthicate } from "../../domain/user/autenthicate.usecase";
import { getUserByEmail } from "../../infra/repositories/user.repository";

const route = Router();

route.post("/login", async (req, res) => {
  const user = await autenthicate({ getUserByEmail }, req.body as ILogin);
  if (user) {
    res.json(user).status(200);
  } else {
    res.sendStatus(401);
  }
});

export { route as login };
