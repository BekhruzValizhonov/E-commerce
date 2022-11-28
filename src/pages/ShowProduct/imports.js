import Size from "@Components/Size";
import DetailsThumb from "@Components/DetailsThumb";
import ZoomImage from "@Components/ZoomImage";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  saveToCart,
  showProductPageDecrement,
  showProductPageIncrement,
  saveSingleProduct,
  saveSinglelId,
} from "@redux/reducers/cartProducts";
import { changeVisibilityDialog } from "@redux/reducers/visibility";
import CheckOut from "@common/CheckOut";
import { useLocation, useParams } from "react-router-dom";

export {
  Size,
  DetailsThumb,
  ZoomImage,
  useTranslation,
  useDispatch,
  useSelector,
  AddShoppingCartIcon,
  saveToCart,
  showProductPageDecrement,
  showProductPageIncrement,
  changeVisibilityDialog,
  saveSingleProduct,
  saveSinglelId,
  CheckOut,
  useParams,
  useLocation,
};
