import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import style from "./offer.module.css";

const Offer = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(
      `/products/Распродажа/price_to=/price_from=/brand=/floor=/size=/sold_amount`
    );
  };

  return (
    <div className={style.main}>
      <div className={`${style.container}`}>
        {data?.map((offer) => {
          return (
            <div
              key={offer?.id}
              className={style.wrapper}
              onClick={handleNavigate}
            >
              <img
                src={offer?.image}
                loading="lazy"
                alt="Offer_Image"
                width={416}
                height={222}
                className={style.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Offer);
