import React from "react";
import { memo } from "react";
import homeShopApi from "@services/homeShopApi";
import style from "./short.module.css";
import { useTranslation } from "react-i18next";

const ShortAbout = () => {
  const { i18n } = useTranslation();
  const { data } = homeShopApi.useFetchServiceQuery(i18n.language);
  return (
    <div className={style.container}>
      {data?.map((item) => {
        return (
          <div key={item?.id} className={`${style.card}`}>
            <div className={style.icons}>
              <img src={item?.icon} alt="" width={40} />
            </div>
            <div className={style.content}>
              <h4 className={style.header}>{item?.title}</h4>
              <p className={style.title}>{item?.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(ShortAbout);
