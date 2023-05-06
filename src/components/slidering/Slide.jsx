import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Slide = ({ s }) => {
  return (
    <div className="keen-slider__slide number-slide1 ">
      <LazyLoadImage
        className="rounded-lg"
        effect="blur"
        src={s?.slide_image}
        alt="slide image"
      />
      
    </div>
  );
};

export default Slide;
