import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Login } from "./pages/Login/Login";
import { PrivateRoute } from "./routes/private.route";

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
      </Routes>
    </BrowserRouter>
  );
};
