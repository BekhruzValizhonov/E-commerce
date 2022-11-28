import React, { useEffect, useState } from "react";
import Progress from "@Components/Progress";
import homeShopApi from "@services/homeShopApi";
import MyAccordion from "@ui/MyAccordion";
import style from "./floor.module.css";

const Floor = ({ setFloor, isClear }) => {
  const { data, isLoading } = homeShopApi.useFetchFloorsQuery();
  const [activeId, setActiveId] = useState();

  useEffect(() => {
    if (isClear) return setActiveId();
  }, [isClear]);

  return (
    <div className={style.main}>
      {isLoading ? (
        <Progress />
      ) : (
        <MyAccordion name="Этаж">
          <div className={style.floor}>
            {data?.results?.map((floor, idx) => {
              return (
                <label
                  key={idx}
                  onClick={() => {
                    setFloor(floor?.title);
                    setActiveId(floor?.title);
                  }}
                  className={style.label_floor}
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
      )}
    </div>
  );
};

export default Floor;
