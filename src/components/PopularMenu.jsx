import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuItemCard from "../Shared/MenuItemCard";
import SectionTitle from "../Shared/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  console.log(menu);
  return (
    <section className="w-10/12 mx-auto my-8">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
        {menu.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link className="btn btn-outline border-0 border-b-4 ">View Full Menu</Link>
      </div>
    </section>
  );
};

export default PopularMenu;
