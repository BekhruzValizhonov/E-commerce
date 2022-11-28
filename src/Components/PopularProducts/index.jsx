import React from "react";
import { memo } from "react";
import productArray from "../../mock/popularProduct";
import homeShopApi from "@services/homeShopApi";
import MyCard from "@ui/MyCard";
import style from "./popular.module.css";
import { useTranslation } from "react-i18next";

const PopularProducts = () => {
  const { i18n } = useTranslation();
  const { data } = homeShopApi.useFetchPopularProductsQuery(i18n.language, 10);

  return (
    <div id={style.box}>
      {productArray.map((product) => {
        return <MyCard style={style} key={product.id} product={product} />;
      })}
    </div>
  );
};

export default memo(PopularProducts);
