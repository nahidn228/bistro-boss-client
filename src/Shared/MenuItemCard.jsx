/* eslint-disable react/prop-types */


const MenuItemCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex justify-center items-center gap-6 text-lg">
      <img
        className="h-20 object-cover rounded-e-3xl rounded-b-3xl"
        src={image}
        alt=""
      />
      <div>
        <p className="flex justify-between font-semibold uppercase">
          {name} ------- <span className="text-[#BB8506] ">$ {price} </span>
        </p>

        <p className="text-gray-600">{recipe}</p>
      </div>
      
    </div>
  );
};

export default MenuItemCard;
