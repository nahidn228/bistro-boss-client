import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner1 from "../../src/assets/home/01.jpg";
import banner2 from "../../src/assets/home/02.jpg";
import banner3 from "../../src/assets/home/03.png";
import banner4 from "../../src/assets/home/04.jpg";
import banner5 from "../../src/assets/home/05.png";
import banner6 from "../../src/assets/home/06.png";

const CarouselBanner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={banner1} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={banner2} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={banner3} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={banner4} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={banner5} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={banner6} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
