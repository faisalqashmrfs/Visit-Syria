import React, { useState } from "react";
import Explore from "./Explore/Explore";
import CardOne from "./CardOne/CardOne";
import img1 from "../../assets/img/hero.png";
import img2 from "../../assets/img/heroT.png";
import img3 from "../../assets/img/heroTh.png";
import img4 from "../../assets/img/heroF.png";
import "./Hero.css";
const Hero = () => {
  const [activeItem, setActiveItem] = useState(0);

  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
  ];

  const reorderedImages = [
    ...images.slice(activeItem),
    ...images.slice(0, activeItem),
  ];

  const updateBackground = (newActiveId) => {
    const newIndex = images.findIndex((image) => image.id === newActiveId);
    setActiveItem(newIndex);
  };

  const renderCards = () => {
    const paragraphs = [
      "طبيعة ساحرة",
      "أثار ومعالم",
      "التاريخ والحضارات",
      "طبيعة ساحرة",
    ];
    

    return reorderedImages.map((item, index) => (
      <CardOne
        key={item.id}
        backgroundImage={item.src}
        par={paragraphs[index % paragraphs.length]}
        isActive={item.id === images[activeItem].id}
        id={item.id}
        onClick={() => updateBackground(item.id)}
      />
    ));
  };

  const renderButtons = () => {
    return images.map((item) => (
      <button
        key={item.id}
        className={`circle ${
          item.id === images[activeItem].id ? "active" : ""
        }`}
        onClick={() => updateBackground(item.id)}
      >
        {item.id === images[activeItem].id && (
          <span className="buttonNumber">{item.id}</span>
        )}
      </button>
    ));
  };

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${reorderedImages[0]?.src})` }}
    >
      <div>
        <Explore />
      </div>
      <div className="sliderHero">
        <div className="heroSlider">
          <div className="cards">{renderCards()}</div>
        </div>
        <div className="container">
          <div className="step">
            {renderButtons()}
            <div className="progressBar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
