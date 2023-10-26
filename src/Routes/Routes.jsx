import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Pages/Home/Home";
import About from './../Components/Pages/About/About';
import Contact from "../Components/Pages/Contact/Contact";
import Blog from './../Components/Pages/Blog/Blog';
import Services from './../Components/Pages/Services/Services';
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
        },
        {
          path:"/about",
          element: <About></About>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
      ]
    },
  ]);

export default router;