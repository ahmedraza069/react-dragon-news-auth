import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: (
      <div className="flex h-screen justify-center items-center text-5xl font-poppins font-bold">
        404
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        element: <PrivateRoute>
          <News></News>
        </PrivateRoute>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
