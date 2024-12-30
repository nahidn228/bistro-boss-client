import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import MenuImg from "../assets/menu/banner3.jpg";
import MenuCategory from "../components/MenuComp/MenuCategory";

const MenuPage = () => {
  return (
    <div>
      <Helmet>
        <title>Our Menu - Bistro Boss Restaurant</title>
      </Helmet>
      <Cover
        img={MenuImg}
        title={"Our menu"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <MenuCategory></MenuCategory>
    </div>
  );
};

export default MenuPage;
