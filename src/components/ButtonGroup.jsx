const ButtonGroup = (props) => {
  console.log(props);
  const { next, previous, ...rest } = props;
  const {
    carouselState: { currentSlide, slidesToShow },
  } = rest;

  return (
    <div className="carousel-button-group d-none d-lg-flex justify-content-end">
      <div
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        <img
          src="/images/chevron-circled.svg"
          className="rotate-180 mx-1"
          style={{ width: "35px" }}
        />
      </div>
      <div
        onClick={() => next()}
        className={currentSlide === slidesToShow ? "disable" : ""}
      >
        <img src="/images/chevron-circled.svg" style={{ width: "35px" }} />
      </div>
    </div>
  );
};

export default ButtonGroup;
