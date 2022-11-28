import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CloseIcon from "@mui/icons-material/Close";
import style from "./canvas.module.css";
import { memo } from "react";

const OffcanvasMobile = ({ handleClose, canvas_style, show, children }) => {
  return (
    <>
      <div className={canvas_style}>
        <Offcanvas
          show={show}
          onHide={handleClose}
          backdrop={true}
          className={style.offcanvas}
        >
          <Offcanvas.Header className={style.header} closeButton>
            <button className={style.btn_canvas} onClick={handleClose}>
              <CloseIcon />
            </button>
            &nbsp;
          </Offcanvas.Header>
          <Offcanvas.Body>{children}</Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default memo(OffcanvasMobile);
