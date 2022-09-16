import Axios from "axios";
import { User } from "../domain/user";

export const loginService = async (
  email: string,
  password: string
): Promise<User> => {
  const { data } = await Axios.post(`http://localhost:3001/login`, {
    email,
    password,
  });

  return { name: data.name, email: data.email };
};
