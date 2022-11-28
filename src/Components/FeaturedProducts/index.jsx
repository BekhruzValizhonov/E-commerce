import MySlider from "@ui/MySlider";
import MyCardSlider from "@ui/MyCardSlider";
import { memo } from "react";
import homeShopApi from "@services/homeShopApi";
import productArray from "../../mock/popularProduct";
import { useTranslation } from "react-i18next";

const FeaturedProducts = () => {
  const { i18n } = useTranslation();
  const { data } = homeShopApi.useFetchFeaturedProductsQuery(i18n.language, 8);

  return (
    <>
      <MySlider>
        {data?.results?.map((product) => {
          return (
            <MyCardSlider
              key={product.id}
              productArray={productArray}
              product={product}
            />
          );
        })}
      </MySlider>
    </>
  );
};

export default memo(FeaturedProducts);
