import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import Register from "../pages/Register/Register";
import Pack from "../components/pack";
import Game from "../components/Game";
import Makehead from "../components/makehead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Main",
    element: <Main />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/pack",
    element: <Pack />,
  },
  {
    path: "/Game",
    element: <Game />,
  },
]);

export default router;
