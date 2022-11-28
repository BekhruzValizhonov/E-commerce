import { memo } from "react";
import homeShopApi from "@services/homeShopApi";
import MyCardSlider from "@ui/MyCardSlider";
import MySlider from "@ui/MySlider";
import { useTranslation } from "react-i18next";

const BathProduct = () => {
  const { i18n } = useTranslation();
  const { data } = homeShopApi.useFetchBathProductsQuery(i18n.language, 8);

  return (
    <>
      <MySlider>
        {data?.results.map((product) => {
          return <MyCardSlider key={product.id} product={product} />;
        })}
      </MySlider>
    </>
  );
};

export default memo(BathProduct);
