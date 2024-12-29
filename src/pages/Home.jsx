import BistroBoss from "../components/BistroBoss";
import Call from "../components/Call";
import CarouselBanner from "../components/CarouselBanner";
import ChefRecommends from "../components/ChefRecommends";
import PopularMenu from "../components/PopularMenu";
import SwiperImg from "../components/SwiperImg";

const Home = () => {
  return (
    <div>
      <CarouselBanner></CarouselBanner>
      <SwiperImg></SwiperImg>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <Call></Call>
      <ChefRecommends></ChefRecommends>
    </div>
  );
};

export default Home;
