import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";
import router from "./routes/routing";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Register /> */}
      {/* <Main /> */}
    </div>
  );
}

export default App;
