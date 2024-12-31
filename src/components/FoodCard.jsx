/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="">
        <img src={item?.image} alt={item?.name} className="w-full" />
      </figure>
      <p className="bg-black bg-opacity-60 text-white absolute right-3 top-3 rounded-md px-2 py-1 text-sm font-semibold">
        $ {item?.price}
      </p>
      <div className="card-body item?s-center text-center">
        <h2 className="card-title">{item?.name}</h2>
        <p>{item?.recipe}</p>
        <div className="card-actions flex items-center justify-center">
          <Link className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 uppercase ">
            add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
