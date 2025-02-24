import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import useCart from "../hooks/useCart";
import { AuthContext } from "../providers/AuthProviders";
import useAdmin from "./../hooks/useAdmin";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        alert("Successfully logged out");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const navItem = (
    <>
      <li>
        <NavLink to="/" className="btn btn-ghost">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="btn btn-ghost">
          Our menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/order/salad" className="btn btn-ghost">
          Order Food
        </NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome" className="btn btn-ghost">
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to="/dashboard/userHome" className="btn btn-ghost">
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/login" className="btn btn-ghost">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="btn btn-ghost">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart" className="btn btn-ghost">
          <FaCartPlus />
          <div className="badge badge-secondary">+{cart.length}</div>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-55 max-w-screen-xl mx-auto text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase"
          >
            {navItem}
          </ul>
        </div>
        <div className=" uppercase p-2">
          <p className=" text-xl font-bold">
            Bistro boss <br />{" "}
            <span className="text-base font-semibold">Restaurant</span>
          </p>
        </div>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 uppercase">{navItem}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span className="text-sm font-semibold mr-2">
              {user?.displayName}
            </span>

            <button
              onClick={handleLogOut}
              className="btn  btn-error text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="btn btn-outline btn-accent">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
