import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../contexts/Login/login.context";
import { Box } from "../../elements/Box/Box";
import { Button } from "../../elements/Button/Button";
import { Textbox } from "../../elements/Textbox/Textbox";
import { loginService } from "../../services/login.service";
import { LoginContainer } from "./styles";
import "./styles.ts";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    try {
      await loginService(email, password);
      login();
      navigate("/home");
    } catch (error) {
      alert("Não autorizado");
    }
  };

  return (
    <LoginContainer>
      <Box>
        <form>
          <Textbox
            id="email"
            label="Email"
            handleChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Textbox
            id="password"
            label="Password"
            type="password"
            handleChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button width={"100"} value="Signin" onClick={handleClick} />
        </form>
      </Box>
    </LoginContainer>
  );
};
