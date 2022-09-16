import Axios from "axios";

export const loginService = async (email: string, password: string) => {
  await Axios.post(`http://localhost:3001/login`, {
    email,
    password,
  });
};
