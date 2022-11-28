import React, { useEffect, useState } from "react";
import homeShopApi from "@services/homeShopApi";
import MyAccordion from "@ui/MyAccordion";
import style from "./floor.module.css";

const Floor = ({ setMobileFloor, isClear }) => {
  const { data } = homeShopApi.useFetchFloorsQuery();
  const [activeId, setActiveId] = useState();

  useEffect(() => {
    if (isClear) return setActiveId();
  }, [isClear]);

  return (
    <div className={style.main}>
      <MyAccordion name="Этаж">
        <div className={style.floor}>
          {data?.results?.map((floor, idx) => {
            return (
              <label
                key={idx}
                className={style.p_floor}
                onClick={() => {
                  setMobileFloor(floor?.title);
                  setActiveId(floor?.title);
                }}
                style={{
                  color: activeId === floor?.title && "#669900",
                  fontWeight: activeId === floor?.title && 550,
                }}
              >
                {floor?.title}
              </label>
            );
          })}
        </div>
      </MyAccordion>
    </div>
  );
};

export default Floor;
