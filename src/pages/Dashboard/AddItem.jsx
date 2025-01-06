import { useForm } from "react-hook-form";
import { MdRestaurant } from "react-icons/md";
import SectionTitle from "../../Shared/SectionTitle";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading={"Add an item"}
        subHeading={"Whats New"}
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full "
            />
          </label>
          <div className="flex gap-6 my-6">
            {/* Category */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
               

                <option value="salad">SALAD</option>
                <option value="pizza">PIZZA</option>
                <option value="dessert">DESSERT</option>
                <option value="soup">SOUP</option>
                <option value="drinks">DRINKS</option>
              </select>
            </label>

            {/* price */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Enter your Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* Recipe Details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true})}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          {/* Upload image */}
          <div className="form-control my-6">
            <input
              type="file"
              {...register("image")}
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn flex gap-1 bg-[#D1A054]">
            Add Item <MdRestaurant />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
