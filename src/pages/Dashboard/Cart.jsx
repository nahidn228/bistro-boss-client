import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      {/* Header */}
      <div className="flex justify-evenly">
        <h2 className="text-3xl font-semibold"> Total Order: {cart.length} </h2>
        <h2 className="text-3xl font-semibold"> Total Price: {totalPrice} </h2>
        <button className="btn btn-outline font-semibold btn-primary">
          Pay
        </button>
      </div>

      {/* Table */}

      <div className="overflow-x-auto my-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">
                  {item.category}
                  </span> */}
                </td>
                <td> ${item.price} </td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-outline btn-error "
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
