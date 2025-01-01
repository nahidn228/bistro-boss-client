/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (food) => {
    console.log(food, user?.email);

    if (user && user.email) {
      //

      const cartItem = {
        cartId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item?.name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in !",
        text: "Please login to Add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <Link
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 uppercase "
          >
            add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
