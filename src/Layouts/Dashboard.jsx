import { FaBook, FaHome, FaList, FaUsers } from "react-icons/fa";
import { FaCartPlus, FaListUl } from "react-icons/fa6";
import {
  MdEmail,
  MdOutlineRestaurantMenu,
  MdRateReview,
  MdRestaurant,
} from "react-icons/md";
import { RiHome7Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";
const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <RiHome7Fill />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-item">
                  <MdRestaurant /> Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-item">
                  <FaListUl /> Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-bookings">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                  <FaCartPlus /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdRateReview /> Add Review
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/bookings">
                  <FaCalendarCheck /> My Bookings
                </NavLink>
              </li> */}
            </>
          )}
          {/* Shared NavLinks */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <MdOutlineRestaurantMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <MdEmail /> Contact
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
