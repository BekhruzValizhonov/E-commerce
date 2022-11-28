import React, { useState, memo, useEffect } from "react";
import homeShopApi from "@services/homeShopApi";
import MyAccordion from "@ui/MyAccordion";
import style from "./brand.module.css";

const BrandFilter = ({ setMobileBrand, isClear }) => {
  const [activeId, setActiveId] = useState();
  const { data } = homeShopApi.useFetchBrandsQuery();

  useEffect(() => {
    if (isClear) return setActiveId();
  }, [isClear]);

  return (
    <div>
      <MyAccordion name="Марка">
        <div className="d-flex flex-column">
          {data?.results?.map((item, idx) => {
            return (
              <label
                key={idx}
                onClick={() => {
                  setMobileBrand(item?.title);
                  setActiveId(item?.title);
                }}
                style={{
                  color: activeId === item?.title && "#669900",
                  fontWeight: activeId === item?.title && 550,
                }}
                className={`${style.items} ${style.label}`}
              >
                {item?.title}
              </label>
            );
          })}
        </div>
      </MyAccordion>
    </div>
  );
};

export default memo(BrandFilter);
