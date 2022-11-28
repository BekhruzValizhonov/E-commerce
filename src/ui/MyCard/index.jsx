import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import useClickIcon from "@hooks/useClickIcon";
import style from "./card.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  checkSold,
  saveSingleProduct,
} from "../../redux/reducers/cartProducts";

const MyCard = ({ product }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { handleDispatch, myRef } = useClickIcon(style, product);
  const dispatch = useDispatch();
  return (
    <div className={style.wrapper} key={product?.id}>
      <div className={style.wrap_img}>
        <div
          className={style.content}
          onClick={() => {
            navigate(
              `/show-product/${product?.title.replace(/\s+/g, "-")}/${
                product?.id
              }`
            );
            dispatch(checkSold(product));
            dispatch(saveSingleProduct(product));
          }}
        >
          <img
            src={product?.banner}
            loading="lazy"
            alt={product?.name}
            width="204"
            height="204"
            className={style.product}
          />
        </div>
        {product?.discount && (
          <div className={style.ps_product__badge}>
            {i18n.language === "ru" ? (
              <>
                {product?.discount.toLocaleString("ru")} {t("som")}
              </>
            ) : (
              <>
                {product?.discount.toLocaleString("ru")} {t("som")}
              </>
            )}
          </div>
        )}
      </div>
      <div className={style.price}>
        <span className={style.item_1}>
          {i18n.language === "ru" ? (
            <>
              {t("from")}&nbsp;
              {product?.price.toLocaleString("ru")}&nbsp;
              {t("som")}
            </>
          ) : (
            <>
              {product?.price.toLocaleString("ru")}&nbsp;
              {t("som")}
              {t("from")}
            </>
          )}
        </span>
        <span
          ref={myRef}
          onClick={() =>
            handleDispatch(
              product?.id,
              product?.banner,
              product?.price,
              product?.title
            )
          }
        >
          <AddShoppingCartIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
        </span>
      </div>
      <div className={style.text}>
        <p className={style.name}>{product?.title.substring(-1, 50) + "..."}</p>
      </div>
      <div className={style.wrap_content} style={{ width: "225px" }}>
        <div
          className={style.content}
          onClick={() => {
            navigate(
              `/show-product/${product?.title.replace(/\s+/g, "-")}/${
                product?.id
              }`
            );
            dispatch(checkSold(product));
            dispatch(saveSingleProduct(product));
          }}
        >
          {product.sub_title.length > 54
            ? product?.sub_title.substring(-1, 54) + "..."
            : product?.sub_title}
        </div>
      </div>
      <div className={style.wrap_sold}>
        <p id={style.sold}>
          {t("sold")}: {product?.sold_amount}
        </p>
      </div>
    </div>
  );
};

export default memo(MyCard);
