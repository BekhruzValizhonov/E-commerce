import React, { useState, memo, useEffect } from "react";
import Progress from "@Components/Progress";
import homeShopApi from "@services/homeShopApi";
import MyAccordion from "@ui/MyAccordion";
import style from "./size.module.css";

const SizeFilter = ({ setSize, isClear }) => {
  const { data, isLoading } = homeShopApi.useFetchSizeQuery();
  const [activeId, setActiveId] = useState();

  useEffect(() => {
    if (isClear) return setActiveId();
  }, [isClear]);

  return (
    <div>
      {isLoading ? (
        <Progress />
      ) : (
        <MyAccordion name="Размер">
          <div>
            {data?.results?.map((size, idx) => {
              return (
                <label
                  className={style.size_label}
                  key={idx}
                  onClick={() => {
                    setSize(size?.title);
                    setActiveId(size?.title);
                  }}
                  style={{
                    color: activeId === size?.title && "#669900",
                    fontWeight: activeId === size?.title && 550,
                  }}
                >
                  {size?.title}
                </label>
              );
            })}
          </div>
        </MyAccordion>
      )}
    </div>
  );
};

export default memo(SizeFilter);
