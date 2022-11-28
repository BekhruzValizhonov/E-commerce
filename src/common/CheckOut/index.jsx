import { Formik } from "formik";
import React, { useState, memo } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import homeShopApi from "@services/homeShopApi";
import MyButton from "@ui/MyButton";
import validation from "@validation/checkOutScheme";
import { sales } from "@redux/reducers/cartProducts";
import { changeVisibilityAlert } from "@redux/reducers/visibility";
import style from "./check.module.css";

function CheckOut({ show, handleClose, closeCanvas }) {
  const [initialValues, _] = useState({
    full_name: "",
    phone_number: "",
  });
  const { t } = useTranslation();
  const { checkOutScheme } = validation(t);
  const { orderTotal, products: cartProducts } = useSelector(
    (state) => state.persistedReducer.cart
  );
  const [postData] = homeShopApi.useUserInformationMutation();
  const dispatch = useDispatch();

  const handlePostData = async (values) => {
    const products = cartProducts.map((product) => {
      return { product_title: product.name, ordered_amount: product.count };
    });

    await postData({
      ...values,
      phone_number: JSON.parse(values.phone_number),
      products,
    });
    await dispatch(changeVisibilityAlert(true));
    await closeCanvas();
    await handleClose();
    dispatch(sales());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validateOnBlur
            onSubmit={(values) => handlePostData(values)}
            validationSchema={checkOutScheme}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              dirty,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>{t("userName")}</Form.Label>
                  {touched.full_name && errors.full_name && (
                    <span style={{ color: "red", marginLeft: "3px" }}>
                      {errors.full_name}
                    </span>
                  )}
                  <Form.Control
                    type="text"
                    placeholder={t("userName")}
                    className={style.inpt}
                    name="full_name"
                    value={values.full_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    autoFocus
                    maxLength={15}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>{t("phone")}</Form.Label>
                  {touched.phone_number && errors.phone_number && (
                    <span style={{ color: "red", marginLeft: "3px" }}>
                      {errors.phone_number}
                    </span>
                  )}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #ced4da",
                      borderRadius: "5px",
                    }}
                  >
                    <h6 className="mt-2 mx-1">+998</h6>
                    <input
                      type="text"
                      placeholder={t("phone")}
                      name="phone_number"
                      value={values.phone_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={9}
                      required
                      style={{
                        border: "none",
                        marginLeft: "5px",
                        outline: "none",
                        color: "#212529",
                        width: "100%",
                      }}
                    />
                  </div>
                </Form.Group>
                <Modal.Footer className="d-sm-flex justify-content-sm-around align-items-sm-center flex-wrap">
                  <MyButton
                    title={t("order")}
                    classBtn={style.modal_btn}
                    onClick={handleSubmit}
                    disabled={!isValid && !dirty}
                    // onClick={handleClose}
                  />

                  <MyButton
                    title={`${t("total")}: ${orderTotal.toLocaleString(
                      "ru"
                    )} ${t("som")}`}
                    style={"total_btn"}
                    disabled={true}
                  />
                </Modal.Footer>
              </>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default memo(CheckOut);
