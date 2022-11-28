import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import homeShopApi from "../services/homeShopApi";

const useDebounce = () => {
  const [search, setSearch] = useState([]);
  const { i18n } = useTranslation();
  const [fetchProduct, { data }] = homeShopApi.useLazySearchProductQuery();

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 15) return;
    if (value.length > 2) {
      fetch(
        `https://homeshop.uicgroup.tech/api/v1/product-app/all-products/?search=${value}`,
        {
          headers: {
            "Accept-Language": i18n.language,
          },
        }
      )
        .then((res) => res.json())
        .then((json) => setSearch(json?.results));
    }
    if (value.length === 0) {
      setSearch([]);
    }
  };

  const optimisedVersion = useCallback(debounce(handleChange), []);

  return { optimisedVersion, setSearch, search };
};

export default useDebounce;
