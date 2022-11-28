import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import CheckOut from "@common/CheckOut";
import ProductTable from "./Table";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import MyButton, { MyWarningBtn } from "@ui/MyButton";
import style from "./cart.module.css";

const conatiner = {
  maxWidth: "1360px",
  marginLeft: "auto",
  marginRight: "auto",
};

const Cart = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(!show);
  const { products, orderTotal } = useSelector(
    (state) => state.persistedReducer.cart
  );
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div style={conatiner}>
      {products.length === 0 ? (
        <h1>{t("cartEmpty")} :(</h1>
      ) : (
        <>
          <MyWarningBtn
            style={style.anchor_btn}
            link="/"
            title={t("proceed")}
          />
          <ProductTable products={products} />
          <div className={style.main_content}>
            <div className={style.content}>
              <MyButton
                onClick={handleClose}
                classBtn={style.btn_order_cart}
                title={t("order")}
              />
              {orderTotal > 0 && (
                <div className={style.total_wrapper}>
                  <MyButton
                    style={"total_btn"}
                    disabled={true}
                    title={`${t("total")} ${orderTotal.toLocaleString(
                      "ru"
                    )} ${t("som")}`}
                  />
                </div>
              )}
            </div>
            <CheckOut show={show} handleClose={handleClose} />
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Cart);
