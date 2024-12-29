import BistroBoss from "../components/BistroBoss";
import CarouselBanner from "../components/CarouselBanner";
import PopularMenu from "../components/PopularMenu";
import SwiperImg from "../components/SwiperImg";

const Home = () => {
   
  return (
    <div>
      <CarouselBanner></CarouselBanner>
      <SwiperImg></SwiperImg>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
