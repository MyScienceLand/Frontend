import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiHeading } from "react-icons/bi";

const AutoSlider = ({ imagesData, Heading }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    arrows: false,
    margin: 20,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="py-[100px] max-w-[456px] h-[590px] rounded-lg bg-mygradient1 bg-opacity-25 pb-11">
      <Slider ref={sliderRef} {...settings} className="custom-slider">
        {imagesData?.map((item, index) => (
          <div key={index} className="custom-slide flex-1 px-8">
            <div className="">
              <div className="flex justify-center items-center mb-6 gap-2">
                <img src={item.avatar} alt={item.name} />
              </div>
              <div className="flex justify-center items-center flex-col gap-2">
                <h1 className="text-[22px] font-semibold text-white">
                  {Heading}
                </h1>
                <p className="text-[16px] text-center mb-12 font-normal text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim quis nostrud exercitation ullamco laboris nisi ut
                  aliquip.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoSlider;
