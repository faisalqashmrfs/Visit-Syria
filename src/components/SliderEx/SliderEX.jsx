import React, { useState } from "react";
import Slider from "react-slick";
import CardTwo from "../Recommendation/CardTwo/CardTwo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderEX = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1312,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const generateCards = () => {
    const rows = [];
    for (let i = 0; i < 3; i++) {
      const cardsInRow = [];
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        cardsInRow.push(
          <CardTwo key={index} isActive={index === currentSlide} />
        );
      }
      rows.push(cardsInRow);
    }
    return rows.map((row, index) => (
      <div key={index} className="slider-row">
        {row}
      </div>
    ));
  };
  return (
    <div className="Recommendation">
      <div className="RecommendationSlider">
        <Slider {...sliderSettings}>{generateCards()}</Slider>
      </div>
    </div>
  );
};

export default SliderEX;
