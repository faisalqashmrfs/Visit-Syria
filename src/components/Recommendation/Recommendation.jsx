import React, { useState } from "react";
import Slider from "react-slick";
import CardTwo from "./CardTwo/CardTwo";
import "./Recommendation.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recommendation = () => {
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
          slidesToScroll: 1,
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
    const cards = [];
    for (let i = 0; i < 9; i++) {
      cards.push(<CardTwo key={i} isActive={i === currentSlide} />);
    }
    return cards;
  };

  return (
    <div className="Recommendation">
      <div>
        <h1>التوصيات</h1>
        <p>
          نقدم لكم أفضل الأماكن التي يمكن زيارتها في سوريا بناءً على تجارب
          الزوار والأفضل تقييمًا
        </p>
      </div>
      <div className="RecommendationSlider">
        <Slider {...sliderSettings}>{generateCards()}</Slider>
      </div>
    </div>
  );
};

export default Recommendation;
