import React from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";

export const Size = ({ size, style }) => {
  const { t } = useTranslation();
  return (
    <>
      {size.map((size, idx) => (
        <div key={idx}>
          <button className={style.size_btn}>{size.title}</button>
          <button className={style.size_btn}>
            {size.price.toLocaleString("ru")} {t("som")}
          </button>
        </div>
      ))}
    </>
  );
};

export default memo(Size);
