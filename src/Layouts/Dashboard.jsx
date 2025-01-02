import { FaCalendarCheck, FaHome } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { MdOutlineRestaurantMenu, MdRateReview } from "react-icons/md";
import { RiHome7Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <RiHome7Fill />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <SlCalender /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartPlus /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <MdRateReview /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaCalendarCheck /> My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <MdOutlineRestaurantMenu /> Menu
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
