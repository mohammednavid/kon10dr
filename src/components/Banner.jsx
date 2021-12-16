import Slider from "react-slick";
import "../styles/Banner.scss";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div>
        <div
          style={{
            maxWidth: "120px",
            marginLeft: "auto",
            marginRight: "auto",
            // marginTop: "-80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            bottom: "9vh",
            left: "46.5%",
          }}
        >
          {" "}
          {dots}{" "}
        </div>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          background: "transparent",
        }}
      >
        <span></span>
      </div>
    ),
  };
  return (
    <Slider {...settings} className="slider">
      <img src="/banner.png" alt="" />
      <img src="/banner.png" alt="" />
      <img src="/banner.png" alt="" />
    </Slider>
  );
};

export default Banner;
