import React, { useState, useEffect } from "react";
import Footer from "@common/Footer";
import {
  FullScreenFilters,
  MobileFilters,
  MyCard,
  Selects,
  SortIcon,
  useResize,
  useTranslation,
  MyButton,
  MyWarningBtn,
  useDispatch,
  useNavigate,
  useParams,
} from "./imports";
import style from "./products.module.css";

const styleBtn = {
  color: "#fff",
  width: "100%",
};

const conatiner = {
  maxWidth: "1360px",
  marginLeft: "auto",
  marginRight: "auto",
};

const AllProducts = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [productsWithCategories, setProductsWithCategories] = useState();
  const { handleClose, isShow } = useResize();
  const { groupTitle, title } = useParams();
  const [sortSelect, setSortSelect] = useState("");
  const [limit, setLimit] = useState("32");
  const [cancel, setCancel] = useState(false);
  const [isClear, setIsClear] = useState(false);

  // ======================full===========================
  const [price, setPrice] = useState([0, 3000000]);
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [floor, setFloor] = useState("");
  // ======================full===========================

  // =========================Mobile=============================
  const [mobilePrice, setMobilePrice] = useState([0, 3000000]);
  const [mobileBrand, setMobileBrand] = useState("");
  const [mobileSize, setMobileSize] = useState("");
  const [mobileFloor, setMobileFloor] = useState("");
  // =========================Mobile=============================
  const dispatch = useDispatch();

  const handleApply = () => {
    if (isShow) {
      navigate(
        `/products/${title}/price_to=${mobilePrice[0]}/price_from=${mobilePrice[1]}/brand_title=${mobileBrand}/floor_title=${mobileFloor}/size_title=${mobileSize}/${groupTitle}`
      );
    } else {
      navigate(
        `/products/${title}/price_to=${price[0]}/price_from=${price[1]}/brand_title=${brand}/floor_title=${floor}/size_title=${size}/${groupTitle}`
      );
    }
  };

  const handleCancel = () => {
    setCancel(true);
    setBrand("");

    setPrice([0, 3000000]);
    setBrand("");
    setSize("");
    setFloor("");

    setMobilePrice([0, 3000000]);
    setMobileBrand("");
    setMobileSize("");
    setMobileFloor("");

    handleApply();
  };

  useEffect(() => {
    if (cancel) {
      handleCancel();
    }
    setCancel(false);
  }, [cancel]);

  const { price_to, price_from, brand_title, floor_title, size_title } =
    useParams();

  useEffect(() => {
    const priceTo = price_to.slice(9);
    const pricefrom = price_from.slice(11);
    const brandName = brand_title.slice(12);
    const sizeName = size_title.slice(11);
    const floorName = floor_title.slice(12);

    if (/^[0-9]/.test(groupTitle)) {
      fetch(
        `https://homeshop.uicgroup.tech/api/v1/product-app/all-products/?price__gte=${priceTo}&price__lte=${pricefrom}&category__in=${groupTitle}&brand__title__in=${brandName}&size__title__in=${sizeName}&floor__title__in=${floorName}&limit=${limit}`,
        {
          headers: {
            "Accept-Language": i18n.language,
          },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          setProductsWithCategories(json);
        });
    } else {
      fetch(
        `https://homeshop.uicgroup.tech/api/v1/product-app/all-products/?brand__title__in=${brandName}&category__in${groupTitle}=&floor__title__in=${floorName}&ordering=${groupTitle}&price__gte=${priceTo}&price__lte=${pricefrom}&size__title__in=${sizeName}&limit=${limit}`,
        {
          headers: {
            "Accept-Language": i18n.language,
          },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          setProductsWithCategories(json);
        });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [
    groupTitle,
    price_to,
    price_from,
    brand_title,
    size_title,
    floor_title,
    limit,
    i18n.language,
  ]);

  return (
    <>
      <div className={style.selects_filter} style={conatiner}>
        <Selects
          style={style}
          sortSelect={sortSelect}
          setSortSelect={setSortSelect}
          limit={limit}
          setLimit={setLimit}
        />
      </div>

      <div className="d-lg-flex justify-content-lg-between" style={conatiner}>
        <div className={`d-lg-flex ${style.wrapper} `}>
          <div>
            <aside className={`${style.filters_wrapper} ${style.full_wrapper}`}>
              <FullScreenFilters
                style={style}
                setPrice={setPrice}
                setBrand={setBrand}
                setFloor={setFloor}
                setSize={setSize}
                isClear={isClear}
              />
              <MyButton
                title={"Применить"}
                classBtn={style.btn}
                onClick={handleApply}
              />
              <div className="mb-2 mt-2">
                <MyWarningBtn
                  title={"Отменить"}
                  styleBtn={styleBtn}
                  onClick={handleCancel}
                />
              </div>
            </aside>
          </div>

          <div>
            <div className={`${style.products} mx-2`}>
              {productsWithCategories?.results?.map((product) => {
                return <MyCard key={product?.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <MobileFilters
        show={isShow}
        handleClose={handleClose}
        canvas_style={style.mobile_canvas}
        btnStyle={style.btn}
        setMobilePrice={setMobilePrice}
        setMobileBrand={setMobileBrand}
        setMobileSize={setMobileSize}
        setMobileFloor={setMobileFloor}
        handleApply={handleApply}
        styleBtn={styleBtn}
        isClear={isClear}
        handleCancel={handleCancel}
      />

      <button className={style.btn_open} onClick={handleClose}>
        {t("filter")} &nbsp;
        <span>
          <SortIcon />
        </span>
      </button>
    </>
  );
};

export default AllProducts;
