import { useForm } from "react-hook-form";
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
          <input {...register("name")} />

          <select
            {...register("category")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Select a category
            </option>

            <option value="salad">SALAD</option>
            <option value="pizza">PIZZA</option>
            <option value="dessert">DESSERT</option>
            <option value="soup">SOUP</option>
            <option value="drinks">DRINKS</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
