import { Link } from "react-router-dom";
import banner1 from "../../src/assets/home/01.jpg";
import banner2 from "../../src/assets/home/02.jpg";
import banner3 from "../../src/assets/home/03.png";
import SectionTitle from "../Shared/SectionTitle";

const ChefRecommends = () => {
  return (
    <section className="w-10/12 mx-auto">
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-8">
        <div className="card bg-base-100  shadow-xl">
          <figure className="">
            <img src={banner1} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <Link className="btn btn-outline border-0 border-b-4 uppercase">
                add to cart
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure className="">
            <img src={banner2} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <Link className="btn btn-outline border-0 border-b-4 uppercase">
                add to cart
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure className="">
            <img src={banner3} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <Link className="btn btn-outline border-0 border-b-4 uppercase">
                add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
