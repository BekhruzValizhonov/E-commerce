import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import style from "./accordion.module.css";
import { memo } from "react";

const actives = style.active;
export const AccordionItem = ({ children, label }) => {
  const [visibility, setVisibility] = useState(true);

  const handleToggleVisibility = () => {
    setVisibility(!visibility);
  };
  const activeStatus = visibility ? actives : "";

  return (
    <div className={style.accordion}>
      <div
        onClick={handleToggleVisibility}
        className="d-flex align-items-center justify-content-between"
      >
        <button className={style.accordion__button}>{label}</button>
        <span className={style.span}>
          {visibility ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
        </span>
      </div>
      <div className={`${style.accordion__content} ${activeStatus}`}>
        {children}
      </div>
    </div>
  );
};

const MyAccordion = ({ name, children }) => {
  return <AccordionItem label={name} children={children} />;
};

export default memo(MyAccordion);
