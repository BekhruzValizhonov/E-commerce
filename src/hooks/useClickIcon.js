import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickIcon, saveToCart } from "@redux/reducers/cartProducts";

const useClickIcon = (style, product) => {
  const dispatch = useDispatch();
  const myRef = useRef(null);
  const { products } = useSelector((state) => state.persistedReducer.cart);

  const handleDispatch = useCallback(
    (id, banner, price, name) => {
      dispatch(
        saveToCart({
          id,
          image: banner,
          name,
          price,
          count: 0,
          isSold: true,
          // Boshida false bop trudi
          // isSold: false,
        })
      );
      dispatch(clickIcon(id));
    },
    [product, products]
  );

  useEffect(() => {
    const result = products.find((el) => el.id === product.id);
    if (result) {
      myRef.current.classList.add(`${style.icon}`);
    } else if (!result) {
      myRef.current.classList.remove(`${style.icon}`);
    }
  }, [products.length]);

  return { handleDispatch, myRef };
};

export default useClickIcon;
