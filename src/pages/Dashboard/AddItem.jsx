import { useForm } from "react-hook-form";
import { MdRestaurant } from "react-icons/md";
import SectionTitle from "../../Shared/SectionTitle";
import useAxiosPublic from "./../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imgbb and then get url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
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
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>

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
              {...register("recipe", { required: true })}
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
