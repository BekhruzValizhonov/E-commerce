import React from "react";
import { memo } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  remove,
  resetCounter,
} from "@redux/reducers/cartProducts";
import "./table.css";
import { useNavigate } from "react-router-dom";

const navigateName = {
  cursor: "pointer",
  textDecoration: "underline",
  fontSize: "14px",
};

const Table = ({ products }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <table className="mt-2">
        <thead>
          <tr>
            <th scope="col">{t("thProduct")}</th>
            <th scope="col">{t("thPrice")}</th>
            <th scope="col">{t("thGeneral")}</th>
            <th scope="col">{t("thAmount")}</th>
            <th scope="col">{t("thAction")}</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            return (
              <tr key={product?.id}>
                <td>
                  <img
                    className="me-auto"
                    id="table_img"
                    src={product.image}
                    alt="404"
                  />
                  <b
                    style={navigateName}
                    className="product_table_name text-start"
                    onClick={() =>
                      navigate(
                        `/show-product/${product?.name.replace(/\s+/g, "-")}/${
                          product?.id
                        }`
                      )
                    }
                  >
                    {product.name.substring(-1, 20) + "..."}
                  </b>
                </td>
                <td data-label={t("thPrice")}>
                  {product.price.toLocaleString("ru")} {t("som")}
                </td>
                <td data-label={t("thGeneral")}>
                  {product.totalPrice.toLocaleString("ru")} {t("som")}
                </td>
                <td data-label={t("thAmount")}>
                  <div className="count_table d-lg-flex justify-content-lg-center align-items-lg-center">
                    <div>
                      <button
                        className="btn mx-2"
                        onClick={() => {
                          dispatch(decrement(product.id));
                        }}
                      >
                        -
                      </button>
                      <span> {product.count}</span>
                      <button
                        className="btn mx-2"
                        onClick={() => {
                          dispatch(increment(product.id));
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td data-label={t("thAction")}>
                  <div className="count_table d-lg-flex justify-content-lg-center align-items-lg-center">
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(resetCounter(product.id));
                        dispatch(remove(product.id));
                      }}
                    >
                      &times;
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default memo(Table);
