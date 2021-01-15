import React from "react";
import { RichText } from "prismic-reactjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./ImageSlider.scss";

const ImageSlider = (props) => {
  const sliderData = [
    {
      img: props.sliderData.slider_img_1.url,
      alt: props.sliderData.slider_img_1.alt,
      text: props.sliderData.slider_text_1,
    },
    {
      img: props.sliderData.slider_img_2.url,
      alt: props.sliderData.slider_img_2.alt,
      text: props.sliderData.slider_text_2,
    },
    {
      img: props.sliderData.slider_img_3.url,
      alt: props.sliderData.slider_img_3.alt,
      text: props.sliderData.slider_text_3,
    },
  ];

  const [current, setCurrent] = React.useState(0);
  const length = sliderData.length;

  // TODO: Refactor this logic in one helper function
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <button onClick={prevSlide} className="slider__left">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button onClick={nextSlide} className="slider__right">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      {sliderData.map((slide, index) => {
        return (
          // TODO: Refactor this so that active doesn't have to be conditinaly added
          <div className={index === current ? 'slide active' : 'slide'}
               key={index}>
                 {index === current && (
                   <div className="slider__data">
                     <img src={slide.img} alt={slide.alt} className="slider__img" />
                      <p>{RichText.asText(slide.text)}</p>
                   </div>
                 )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
