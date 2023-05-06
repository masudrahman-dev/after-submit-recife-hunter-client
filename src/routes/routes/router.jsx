import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import Blogs from "../../pages/blog/Blogs";

import PrivateRoute from "../privateRoute/PrivateRoute";
import loader from "../../loaders/loader";
import ChefeRecefies from "../../pages/chefeRecips/ChefeRecefies";
import chefeDetailsLoader from "../../loaders/chefeDetailsLoader";
import Login from "../../pages/formPages/Login/Login";
import Register from "../../pages/formPages/Register/Register";
import ForgotPassword from "../../pages/formPages/forgotPassword/ForgotPassword";
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loader,
      },
      {
        path: "home/:id",
        element: (
          <PrivateRoute>
            <ChefeRecefies></ChefeRecefies>
          </PrivateRoute>
        ),
        loader: chefeDetailsLoader,
      },

      {
        path: "Blogs",
        element: <Blogs />,
      },
      {
        path: "about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-reset-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);
export default router;
