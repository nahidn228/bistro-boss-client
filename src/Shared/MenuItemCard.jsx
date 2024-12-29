/* eslint-disable react/prop-types */

const MenuItemCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-6 text-lg">
      <img className="w-28 object-cover rounded-e-full rounded-b-full" src={image} alt="" />
      <div>
        <p className="flex justify-between font-semibold">
          {name} <span className="text-[#BB8506] ">$ {price} </span>
        </p>

        <p className='text-gray-600'>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;
