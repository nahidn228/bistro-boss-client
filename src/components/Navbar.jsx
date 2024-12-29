import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <NavLink className="btn btn-ghost">Home</NavLink>
      </li>

      <li>
        <NavLink className="btn btn-ghost">Contact US</NavLink>
      </li>
      <li>
        <NavLink className="btn btn-ghost">Dashboard</NavLink>
      </li>
      <li>
        <NavLink className="btn btn-ghost">Our menu</NavLink>
      </li>
      <li>
        <NavLink className="btn btn-ghost">our shop</NavLink>
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
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
