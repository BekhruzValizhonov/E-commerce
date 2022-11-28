import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { remove, resetCounter } from "@redux/reducers/cartProducts";
import MyButton, { MyWarningBtn } from "@ui/MyButton";
import OffcanvasCart from "@ui/MyOffCanvas";
import CheckOut from "../CheckOut";

const spanStyle = {
  fontSize: "28px",
  marginRight: "10px",
  cursor: "pointer",
};

const myBtn = { width: "90%" };

const SideCart = ({
  handleClose,
  show,
  setShow,
  // openModal,
  // setOpenModal,
  // handleOpen,
  setBurgerMenu,
}) => {
  const { t } = useTranslation();
  const { products, orderTotal } = useSelector(
    (state) => state.persistedReducer.cart
  );
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const closeCanvas = () => setShow(false);

  const handleClick = (id) => {
    dispatch(resetCounter(id));
    dispatch(remove(id));
  };

  const handleOpen = () => setOpenModal(!openModal);

  return (
    <>
      {/* =============================================================== */}
      <OffcanvasCart handleClose={handleClose} show={show}>
        {products?.map((product) => {
          return (
            <div key={product?.id}>
              <hr />
              <span className="mx-2">
                <b>Количество: X{product?.count}</b>
              </span>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <img src={product?.image} alt="404" width={70} />
                </div>
                <div className="w-25">
                  <b>{product?.name.substring(-1, 19) + "..."}</b>
                </div>
                <div>
                  <b>
                    {product.price.toLocaleString("en-US")} {t("som")}
                  </b>
                </div>
                <div>
                  <span
                    style={spanStyle}
                    onClick={() => {
                      handleClick(product?.id);
                    }}
                  >
                    &times;
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        {products.length > 0 && (
          <h5 className="mt-5 text-center">
            {t("total")}: {orderTotal.toLocaleString("en-US")} {t("som")}
          </h5>
        )}

        <div
          className="text-center"
          onClick={() => {
            setBurgerMenu(false);
          }}
        >
          <MyWarningBtn
            onClick={closeCanvas}
            link="/cart"
            title={t("view")}
            style={"warning_btn mb-3 mt-2 text-light"}
          />
          {products.length > 0 && (
            <MyButton
              title={t("order")}
              classBtn={"btn_order_navbar mb-5"}
              style={myBtn}
              onClick={handleOpen}
            />
          )}
        </div>
      </OffcanvasCart>
      {/* ============================================================ */}

      <CheckOut
        show={openModal}
        handleClose={handleOpen}
        closeCanvas={closeCanvas}
      />
      {/* =============================================================== */}
    </>
  );
};

export default memo(SideCart);
