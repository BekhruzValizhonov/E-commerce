import React, { useEffect, useState } from "react";
import Loader from "@Components/Loader";
import homeShopApi from "@services/homeShopApi";
import {
  AddShoppingCartIcon,
  DetailsThumb,
  Size,
  ZoomImage,
  saveToCart,
  showProductPageDecrement,
  showProductPageIncrement,
  useDispatch,
  useSelector,
  useTranslation,
  saveSingleProduct,
  saveSinglelId,
  useLocation,
  useParams,
} from "./imports";
import style from "./show.module.css";

const conatiner = {
  maxWidth: "1360px",
  marginLeft: "auto",
  marginRight: "auto",
};

let lastId = 1;

const ShowProduct = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const myRef = React.createRef();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [singleProduct, setSingleProduct] = useState();
  const [activeId, setActiveId] = useState();
  const { resultSingleProduct } = useSelector(
    (state) => state.persistedReducer.cart
  );
  const [fetchSingle, { data, isLoading }] =
    homeShopApi.useLazyFetchSingleProductsQuery();

  useEffect(() => {
    fetchSingle(id, i18n.language).then(() => {
      let tempProps = data;
      const resultsGallery = data?.gallery?.map((v) => {
        return { ...v, id: lastId++ };
      });
      const banner = { image: data?.banner, id: lastId++ };
      resultsGallery.push(banner);
      tempProps = { ...tempProps, resultsGallery };
      Object.preventExtensions(tempProps);
      setSingleProduct(tempProps);
      setActiveId(tempProps?.resultsGallery[0]?.id);
    });
  }, [id, data, i18n.language]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(saveSinglelId(singleProduct?.id));
  }, [pathname, id, singleProduct]);

  const handleDispatch = (id, banner, price, name) => {
    dispatch(
      saveToCart({
        id,
        image: banner,
        name,
        price,
        count: 0,
        isSold: true,
      })
    );
    dispatch(saveSingleProduct(singleProduct));
  };

  if (isLoading) {
    return (
      <div className={style.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className={`${style.main_container} mt-lg-5`} style={conatiner}>
        <div className={`${style.wrapper} d-md-flex`}>
          <div className={`${style.parrent_thumb}`}>
            <DetailsThumb
              images={singleProduct?.resultsGallery}
              myRef={myRef}
              style={style}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          </div>
          <div className={`${style.zoom_container} me-auto`}>
            {singleProduct?.resultsGallery.map((v, idx) => {
              return (
                <div key={v.image}>
                  {activeId === v?.id && (
                    <ZoomImage key={idx} img={v.image} larg={v.image} />
                  )}
                </div>
              );
            })}
          </div>

          <div
            className={`${style.content}  d-lg-flex flex-lg-column justify-content-lg-center align-items-lg-start`}
          >
            <h2 className={`${style.name} mt-lg-5`}>{singleProduct?.title}</h2>
            <div className={style.price}>
              {singleProduct?.discount && (
                <span
                  style={{ textDecoration: "line-through", color: "#555" }}
                  className={`mt-3`}
                >
                  <b>{singleProduct?.discount.toLocaleString("ru")}</b>{" "}
                  {t("som")}
                </span>
              )}
              &nbsp;
              <span className={`${style.price_show} mt-3 `}>
                {singleProduct?.price && (
                  <>
                    <b> {singleProduct?.price.toLocaleString("ru")}</b>
                    {t("som")}
                  </>
                )}
              </span>
            </div>
            {singleProduct?.brand?.length > 0 && (
              <p className={`${style.show_item_para} mt-2`}>
                {t("category")}:
                {singleProduct?.brand?.map((brand, idx) => {
                  return (
                    <span className={style.show_items} key={idx}>
                      &nbsp;{brand?.title}&nbsp;
                    </span>
                  );
                })}
              </p>
            )}
            <p>
              {singleProduct?.sold_amount && (
                <>
                  {t("sold")}:
                  <span className={style.show_items}>
                    &nbsp;{singleProduct?.sold_amount}
                  </span>
                </>
              )}
            </p>

            <p className={style.description_show}>
              {singleProduct?.description}
            </p>
            <div className="w-100 row">
              {singleProduct?.size?.length > 0 && (
                <div className="col-6">
                  <h5 className={style.size}>{t("size")}</h5>
                  <Size style={style} size={singleProduct?.size} />
                </div>
              )}

              {singleProduct?.floor?.length > 0 && (
                <div className="col-6">
                  <h5 className={style.size}>{t("floor")}</h5>
                  {singleProduct?.floor?.map((el, idx) => {
                    return (
                      <div key={idx}>
                        <button className={style.size_btn}>{el?.title}</button>
                        <button className={style.size_btn}>
                          {el?.price && (
                            <>
                              {el?.price?.toLocaleString("ru")} {t("som")}
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <br className={`mb-2`} />
            <div className={style.wrapper_count}>
              <div className={style.count_container}>
                {resultSingleProduct?.isSold ? (
                  <>
                    <button
                      className={style.btn_count}
                      onClick={() => {
                        dispatch(showProductPageDecrement(singleProduct?.id));
                      }}
                    >
                      -
                    </button>
                    <span className={style.count}>
                      {resultSingleProduct?.count}
                    </span>
                    <button
                      className={style.btn_count}
                      onClick={() => {
                        dispatch(showProductPageIncrement(singleProduct?.id));
                      }}
                    >
                      +
                    </button>
                  </>
                ) : singleProduct !== undefined ? (
                  <button
                    className={style.order_btn}
                    onClick={() =>
                      handleDispatch(
                        singleProduct?.id,
                        singleProduct?.banner,
                        singleProduct?.price,
                        singleProduct?.title
                      )
                    }
                  >
                    {t("addTocart")} <AddShoppingCartIcon />
                  </button>
                ) : (
                  <></>
                )}
              </div>
              <div className={style.count_container}></div>
            </div>
            <br className={`mt-2`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
