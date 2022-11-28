import React, { memo } from "react";
import homeShopApi from "@services/homeShopApi";

import {
  BannerCarousel,
  BathProducts,
  FeaturedProducts,
  KitchenProducts,
  Offer,
  PopularProducts,
  ShortAbout,
  TypeProduct,
  useFetchType,
  useTranslation,
} from "./imports";

const conatiner = {
  maxWidth: "1360px",
  marginLeft: "auto",
  marginRight: "auto",
};

const MainPage = () => {
  const { t } = useTranslation();
  const { data } = homeShopApi.useFetchOfferQuery();
  const { handleTypeClick } = useFetchType();

  return (
    <div style={conatiner}>
      <BannerCarousel sliceFirstOffer={data?.slice(0, 2)} />
      <ShortAbout />

      <div>
        <TypeProduct
          type={t("fProduct")}
          view={t("viewAll")}
          onClick={() => handleTypeClick(1)}
        />
      </div>
      <FeaturedProducts />

      <Offer data={data?.slice(2, 5)} />

      <div>
        <TypeProduct
          type={t("pProduct")}
          view={t("viewAll")}
          onClick={() => handleTypeClick(2)}
        />
      </div>
      <PopularProducts />

      <Offer data={data?.slice(5, 8)} />

      <div>
        <TypeProduct
          type={t("kProduct")}
          view={t("viewAll")}
          onClick={() => handleTypeClick(3)}
        />
      </div>
      <KitchenProducts />

      <div>
        <TypeProduct
          type={t("bProduct")}
          view={t("viewAll")}
          onClick={() => handleTypeClick(4)}
        />
      </div>
      <BathProducts />
    </div>
  );
};

export default memo(MainPage);
