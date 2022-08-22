import Carousel from "react-multi-carousel";
import data from "../public/api/cars.json";
import CardItem from "./../src/components/CardItem";
import ButtonGroup from "./../src/components/ButtonGroup";
import useWindowSize from "./../src/hook/useWindowSize";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function HomePage(): JSX.Element {
  const size = useWindowSize();

  return (
    <div className="container">
      <Carousel
        responsive={responsive}
        infinite={false}
        additionalTransfrom={0}
        arrows={false}
        transitionDuration={1000}
        customButtonGroup={<ButtonGroup slideCount={data.length} />}
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderButtonGroupOutside
        shouldResetAutoplay
        showDots={size.width < 1024}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.map((item) => (
          <CardItem {...item} />
        ))}
      </Carousel>
    </div>
  );
}

export default HomePage;
