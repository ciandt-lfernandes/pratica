import Axios from "axios";
import { User } from "../domain/user";

export const loginService = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const { data } = await Axios.post(`http://localhost:3001/login`, {
      email,
      password,
    });
    console.log("nao logou");
    return { name: data.name, email: data.email };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
