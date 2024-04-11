import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "../../public/list.json";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container  px-4 md:px-20  mx-auto max-w-screen-2xl ">
        <h1 className="font-bold text-xl pb-2"> Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga
          saepe non repellendus hic repellat in minima consequatur, quos natus
          ut assumenda, nam, harum at.
        </p>

        <div>
          <Slider {...settings}>
            {filterData.map((items) => (
              <Cards items={items} key={items.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
