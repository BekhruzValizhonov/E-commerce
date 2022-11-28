import React from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { memo } from "react";
import homeShopApi from "@services/homeShopApi";
import { useState } from "react";
import { useEffect } from "react";
import style from "./banner.module.css";
import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={`${style.arrow} ${style.arrow_right}`}>
      <ArrowForwardIosIcon className={style.icons} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={`${style.arrow} ${style.arrow_left}`}>
      <ArrowBackIosNewIcon className={style.icons} />
    </div>
  );
}

const CustomArrows = ({ sliceFirstOffer }) => {
  const { data } = homeShopApi.useFetchBannerSliderQuery();
  const [bannerImg, setBannerImg] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(
      `/products/Распродажа/price_to=/price_from=/brand=/floor=/size=/sold_amount`
    );
  };

  useEffect(() => {
    setBannerImg(data);
  }, [data]);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={`${style.wrapper}`}>
      <div className={style.banner}>
        <Slider {...settings}>
          {bannerImg?.map((slider) => {
            return (
              <img
                key={slider?.id}
                src={`${slider?.image}`}
                loading="lazy"
                alt="Banner_image"
                className={`${style.banner_img} m-auto`}
                width={868}
                height={409.59}
              />
            );
          })}
        </Slider>
      </div>

      <div className={` ${style.right_card}`}>
        {sliceFirstOffer?.map((offer) => {
          return (
            <div
              className={style.offers}
              key={offer?.id}
              onClick={handleNavigate}
            >
              <img
                src={offer?.image}
                alt="Offer_Image"
                className={` ${style.card_img}`}
                style={{ cursor: "pointer" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(CustomArrows);
