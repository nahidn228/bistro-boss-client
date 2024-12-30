/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import MenuItemCard from "../../Shared/MenuItemCard";

const MenuCategory = ({ items, btnText }) => {

  return (
    <section className="w-10/12 mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={`/ourShop`}
          className="btn btn-outline border-0 border-b-4 "
        >
          {btnText}
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;
