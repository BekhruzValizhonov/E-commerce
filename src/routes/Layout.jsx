import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "@common/Footer";
import HideAppBar from "@common/Navbar";
import ScrollUpBtn from "@Components/ScrollUpBtn";
import Congratulation from "@Components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { changeVisibilityAlert } from "@redux/reducers/visibility";

const alert = {
  position: "fixed",
  top: "5rem",
  width: "80%",
  right: 0,
};

function Layout() {
  const { congratulation } = useSelector((state) => state.visibility);
  const dispatch = useDispatch();

  useEffect(() => {
    if (congratulation) {
      setTimeout(() => {
        dispatch(changeVisibilityAlert(false));
      }, 8000);
    }
  }, [congratulation]);

  return (
    <div>
      <HideAppBar />
      <ScrollUpBtn />
      <Outlet />
      <Footer />
      <div style={alert}>{congratulation && <Congratulation />}</div>
    </div>
  );
}

export default Layout;
