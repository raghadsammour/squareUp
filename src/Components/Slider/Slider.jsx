import { useState } from "react";
import "./Slider.css";
import { MdOutlineArrowLeft } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";

const Slider = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const next = () => {
    setActiveSlide((next) => {
      if (next === slides.length - 1) {
        return 0;
      } else return next + 1;
    });
  };

  const last = () => {
    setActiveSlide((last) => {
      if (last === 0) return slides.length - 1;
      return last - 1;
    });
  };

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide"
            style={{
              transform: `translateX(calc(-${activeSlide * 100}% - ${
                activeSlide * 4
              }vw))`,
            }}
          >
            <div className="slide-card">
              <p className="titleClient">{slide.title}</p>
              <p className="textClient">{slide.text}</p>
              <div className="client-card">
                <div className="img-box">
                  <img src={slide.avatar} alt={slide.name} />
                </div>
                <div className="clientInfo">
                  <p className="clientName">{slide.name}</p>
                  <p className="clientWork">{slide.work}</p>
                </div>
                <a className="website" href={slide.link}>
                  open website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button className="left" onClick={last}>
          <MdOutlineArrowLeft className="colorArrow" />
        </button>
        <button className="right" onClick={next}>
          <MdOutlineArrowRight className="colorArrow" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
