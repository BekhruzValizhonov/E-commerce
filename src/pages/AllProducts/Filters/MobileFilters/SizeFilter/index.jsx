import React, { useState, memo, useEffect } from "react";
import homeShopApi from "@services/homeShopApi";
import MyAccordion from "@ui/MyAccordion";
import style from "./size.module.css";

const SizeFilter = ({ setMobileSize, isClear }) => {
  const { data } = homeShopApi.useFetchSizeQuery();
  const [activeId, setActiveId] = useState();

  useEffect(() => {
    if (isClear) return setActiveId();
  }, [isClear]);

  return (
    <div>
      <MyAccordion name="Размер">
        <div>
          {data?.results?.map((item, idx) => {
            return (
              <label
                className={style.size_p}
                key={idx}
                onClick={() => {
                  setMobileSize(item?.title);
                  setActiveId(item?.title);
                }}
                style={{
                  color: activeId === item?.title && "#669900",
                  fontWeight: activeId === item?.title && 550,
                }}
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

export default memo(SizeFilter);
