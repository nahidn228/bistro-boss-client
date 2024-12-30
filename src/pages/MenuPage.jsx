import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import MenuImg from "../assets/menu/banner3.jpg";
import drinksImg from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";
import MenuCategory from "../components/MenuComp/MenuCategory";
import useMenu from "../hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle";

const MenuPage = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Our Menu - Bistro Boss Restaurant</title>
      </Helmet>

      {/* Main cover */}
      <Cover
        img={MenuImg}
        title={"Our menu"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
       <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* Offered category  */}
      <MenuCategory
        items={offered}
        btnText={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* DESSERTS category */}
      <Cover
        img={dessertImg}
        title={"DESSERTS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory
        items={dessert}
        btnText={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* Pizza category */}
      <Cover
        img={pizzaImg}
        title={"pizza"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory
        items={pizza}
        btnText={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* Salad category */}
      <Cover
        img={saladImg}
        title={"salad"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory
        items={salad}
        btnText={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* Soup category */}
      <Cover
        img={soupImg}
        title={"soup"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory
        items={soup}
        btnText={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* drinks category */}
      <Cover
        img={drinksImg}
        title={"drinks"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory
        items={drinks}
        btnText={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>




    </div>
  );
};

export default MenuPage;
