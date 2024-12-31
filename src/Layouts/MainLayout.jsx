import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  const hideNavFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");
  return (
    <div>
      {hideNavFooter || <Navbar></Navbar>}
      {location.pathname !== "/login" ? <Navbar></Navbar> : ""}
      <Outlet></Outlet>
      {hideNavFooter || <Footer></Footer>}
      {/* {location.pathname !== "/login" ? <Footer></Footer> : ""} */}
    </div>
  );
};

export default MainLayout;
