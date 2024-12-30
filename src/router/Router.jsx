import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BlogForm from "../pages/BlogForm/BlogForm";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h1>404 Not Found</h1>,
      children: [

        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "addblog",
          element: <BlogForm></BlogForm>
        }
      ]
    },
  ]);

    export default router;