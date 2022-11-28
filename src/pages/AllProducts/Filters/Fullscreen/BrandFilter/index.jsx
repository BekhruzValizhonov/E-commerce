import React, { useEffect, useState } from "react";
import { memo } from "react";
import Progress from "@Components/Progress";
import homeShopApi from "@services/homeShopApi";
import MyAccordion from "@ui/MyAccordion";
import style from "./brand.module.css";

const BrandFilter = ({ setBrand, isClear }) => {
  const [activeId, setActiveId] = useState();
  const { data, isLoading } = homeShopApi.useFetchBrandsQuery();

  useEffect(() => {
    if (isClear) return setActiveId();
  }, [isClear]);

  return (
    <div>
      {isLoading ? (
        <Progress />
      ) : (
        <MyAccordion name="Марка">
          <div className="d-flex flex-column">
            {data?.results?.map((brand, idx) => {
              return (
                <label
                  key={idx}
                  onClick={() => {
                    setBrand(brand?.title);
                    setActiveId(brand?.title);
                  }}
                  style={{
                    color: activeId === brand?.title && "#669900",
                    fontWeight: activeId === brand?.title && 550,
                  }}
                  className={`${style.items} ${style.label}`}
                >
                  {brand?.title}
                </label>
              );
            })}
          </div>
        </MyAccordion>
      )}
    </div>
  );
};

export default memo(BrandFilter);
