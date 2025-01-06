import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import MainLayout from "../Layouts/MainLayout";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import AllUsers from "../pages/Dashboard/AllUsers";
import Cart from "../pages/Dashboard/Cart";
import Home from "../pages/Home";
import Menu from "../pages/MenuPage";
import Order from "../pages/Order";
import PrivateRoute from "./privateRoute/PrivateRoute";
import AddItem from "../pages/Dashboard/AddItem";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "all-users",
        element: <AdminRoute><AllUsers /></AdminRoute>,
      },
      {
        path: "add-item",
        element: <AdminRoute><AddItem /></AdminRoute>,
      },
    ],
  },
]);
