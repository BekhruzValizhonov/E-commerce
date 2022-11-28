import React, { memo } from "react";
import homeShopApi from "@services/homeShopApi";
import { ListGroupItem, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./dropdown.module.css";

const MenuCatgeries = ({ setBurgerMenu, burgerMenu }) => {
  const { i18n } = useTranslation();
  const { data } = homeShopApi.useFetchNavbarCategoriesQuery(i18n.language);
  const navigate = useNavigate();

  const fetchSoldAmount = (title) => {
    const isTitle = title === "Бестселлеры" ? "-sold_amount" : "sold_amount";
    navigate(
      `/products/${title}/price_to=/price_from=/brand=/floor=/size=/${isTitle}`
    );
    setBurgerMenu(!burgerMenu);
  };

  const fetchCategory = (id, title) => {
    navigate(
      `/products/${title}/price_to=/price_from=/brand=/floor=/size=/${id}`
    );
    setBurgerMenu(!burgerMenu);
  };

  return (
    <div
      className={`${style.mobile_dropdown} d-flex justify-content-around align-items-center`}
    >
      {data?.results?.map((el) => {
        return (
          <div key={el?.id} className={style.mobile_dropdown}>
            {el?.sub_category?.length > 0 ? (
              <NavDropdown
                id="dropdown-basic"
                title={el?.title}
                className={`${style.NavDropdown} mx-lg-2`}
              >
                {el?.sub_category?.map((item) => {
                  return (
                    <NavDropdown.Item key={item?.id}>
                      <option
                        onClick={() => fetchCategory(item?.id, el?.title)}
                      >
                        {item?.title}
                      </option>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            ) : (
              <ListGroupItem
                className={`${style.list} mx-lg-2`}
                onClick={() => fetchSoldAmount(el?.title)}
              >
                {el?.title}
              </ListGroupItem>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default memo(MenuCatgeries);
