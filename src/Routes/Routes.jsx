import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import MainLayout from "../Layouts/MainLayout";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import AddItem from "../pages/Dashboard/AddItem";
import AdminHome from "../pages/Dashboard/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers";
import Cart from "../pages/Dashboard/Cart";
import ManageItems from "../pages/Dashboard/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import UserHome from "../pages/Dashboard/UserHome";
import Home from "../pages/Home";
import Menu from "../pages/MenuPage";
import Order from "../pages/Order";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./privateRoute/PrivateRoute";

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
      //Normal User route
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment />,
      },

      //Admin Only Route
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "add-item",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manage-item",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
