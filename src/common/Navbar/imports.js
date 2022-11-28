import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Badge } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import Search from "@Components/Search";
import { Link } from "react-router-dom";
import MenuCatgeries from "@Components/DropdownCategories";
import SideCart from "../SideCart";
import LangDropdown from "@Components/LangDropdown";
import FullScreenDialog from "@Components/SearchDialog";
import { useDispatch, useSelector } from "react-redux";
import {
  changeVisibility,
  changeVisibilityDialog,
} from "@redux/reducers/visibility";

export {
  Container,
  Link,
  Badge,
  FullScreenDialog,
  LangDropdown,
  MenuCatgeries,
  Nav,
  Navbar,
  Search,
  SearchIcon,
  SearchOffIcon,
  ShoppingBagIcon,
  SideCart,
  changeVisibility,
  changeVisibilityDialog,
  useDispatch,
  useSelector,
};
