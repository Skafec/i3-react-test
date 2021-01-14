import React from "react";
import { RichText } from "prismic-reactjs";

const ImageSlider = (props) => {
  const [current, setCurrent] = React.useState(0);

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

  React.useEffect(() => {
    console.log(sliderData);
  });

  return (
    <div className="slider">
      <button>{"<"}</button>
      <button>{">"}</button>
      {sliderData.map((slide, index) => {
        return (
          <div className="slider__data">
            <img src={slide.img} alt={slide.alt} />
            <p>{RichText.asText(slide.text)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
