import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeVisibility } from "../redux/reducers/visibility";

const useFetchType = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTypeClick = (typeNumber) => {
    dispatch(changeVisibility(false));
    navigate(
      `/products/type_product/price_to=/price_from=/brand=/floor=/size=/${typeNumber}`
    );
  };

  return { handleTypeClick };
};

export default useFetchType;
