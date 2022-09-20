import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginContext from "./contexts/Login/login.context";
import { Chart } from "./pages/Chart/chart.page";
import { Home } from "./pages/Home/home.page";
import { Login } from "./pages/Login/login.page";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const { isLogged } = useContext(LoginContext);
  return isLogged() ? <>{children}</> : <Navigate to="/login" />;
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/chart"
          element={
            <PrivateRoute>
              <Chart />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
