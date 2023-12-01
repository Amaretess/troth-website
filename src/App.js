import { RouterProvider } from "react-router-dom";
import { routesConfig } from "./config/routesConfig";
import "./App.css";

const App = () => <RouterProvider router={routesConfig} />;

export default App;
