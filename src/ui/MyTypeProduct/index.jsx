import React, { memo } from "react";
import style from "./type.module.css";

const TypeProduct = ({ type, view, onClick }) => {
  return (
    <div className={`mt-5 mx-md-3 ${style.type_product}`}>
      <h5 className={style.type}>{type}</h5>
      <div className={style.link} onClick={onClick}>
        {view}
      </div>
    </div>
  );
};

export default memo(TypeProduct);
