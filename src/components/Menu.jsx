import { Link } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle";
import featuredImg from "../assets/home/featured.jpg";
import "./Featured.css";

const Menu = () => {
  return (
    <section className="my-10 featured-item bg-fixed text-white ">
      <div className=" py-20 px-36  bg-black bg-opacity-30">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="md:flex items-center justify-center gap-6">
          <div className="">
            <img className="" src={featuredImg} alt="" />
          </div>
          <div className="space-y-4">
            <p>Aug, 20, 2024</p>
            <p className="uppercase">WHERE CAN I GET SOME?</p>
            <p>
              Seamlessly disintermediate wireless infomediaries for standards
              compliant alignments. Progressively transform transparent
              alignments without an expanded array of customer service.
              Proactively incentivize covalent.
            </p>
            <Link className="btn btn-outline border-0 border-b-2 uppercase text-white">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
