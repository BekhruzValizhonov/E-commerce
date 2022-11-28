import React from "react";
import Floor from "./Floor";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";
import BrandFilter from "./BrandFilter";
import OffcanvasMobile from "@ui/MyOffCanvas";

import style from "./main.module.css";
import { MyButton, MyWarningBtn } from "../../imports";

const MobileFilters = ({
  show,
  handleClose,
  setMobilePrice,
  setMobileBrand,
  setMobileSize,
  setMobileFloor,
  handleApply,
  styleBtn,
  handleCancel,
  isClear,
}) => {
  return (
    <div className={style.mobile_canvas}>
      <OffcanvasMobile
        show={show}
        handleClose={handleClose}
        canvas_style={style.mobile_canvas}
      >
        <aside
          className={`${style.filters_wrapper} ${style.mobile_wrapper}  w-100`}
        >
          <PriceFilter style={style} setMobilePrice={setMobilePrice} />
          <hr />
          <SizeFilter setMobileSize={setMobileSize} isClear={isClear} />
          <hr />
          <Floor setMobileFloor={setMobileFloor} isClear={isClear} />
          <hr />
          <BrandFilter setMobileBrand={setMobileBrand} isClear={isClear} />

          <div className="d-flex flex-column justify-content-center align-items-center">
            <MyButton
              title={"Применить"}
              classBtn={style.btn}
              onClick={handleApply}
            />
            <div className="mb-2 mt-2 w-75">
              <MyWarningBtn
                title={"Отменить"}
                styleBtn={styleBtn}
                onClick={handleCancel}
              />
            </div>
          </div>
        </aside>
      </OffcanvasMobile>
      {/* Mobile */}
    </div>
  );
};

export default MobileFilters;
