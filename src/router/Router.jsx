import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BlogForm from "../pages/BlogForm/BlogForm";
import BlogDetails from "../pages/Details/BlogDetails";
import UpdateBlog from "../pages/BlogForm/UpdateBlog";
import PrivateRoute from "./PrivateRoute";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Table from "../components/Table";
import FeaturedPost from "../pages/FeaturedPost/FeaturedPost";
import WishList from "../pages/WishList/WishList";
import ErrorPage from "../pages/ErrorPage/ErrorPage";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoute><BlogForm></BlogForm></PrivateRoute>
        },
        {
          path: 'details/:id',
          element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        },
        {
          path: 'update/:id',
          element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        },
        {
          path: 'allblogs',
          element: <AllBlogs></AllBlogs>,
        },
        {
          path: "wishlist",
          element: <PrivateRoute><WishList></WishList></PrivateRoute>,
        },
        {
          path: "featured",
          element: <FeaturedPost></FeaturedPost>,
          loader: () => fetch('http://localhost:5000/allblogs')
        }
      ]
    },
  ]);

    export default router;