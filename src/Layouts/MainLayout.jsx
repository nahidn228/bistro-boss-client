import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  // const hideNavFooter = location.pathname.includes("/login");
  return (
    <div>
      {/* {hideNavFooter || <Navbar></Navbar>} */}
      {location.pathname !== "/login" ? <Navbar></Navbar> : ""}
      <Outlet></Outlet>
      {location.pathname !== "/login" ? <Footer></Footer> : ""}
    </div>
  );
};

export default MainLayout;
