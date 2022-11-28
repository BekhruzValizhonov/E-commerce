import { memo } from "react";
import Slider from "react-slick";
import settings from "./settings";
import style from "./slider.module.css";

const MySlider = ({ children }) => {
  return (
    <div className={style.body_row}>
      <Slider className={style.slider} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default memo(MySlider);
