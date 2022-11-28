import React from "react";
import MyAccordion from "@ui/MyAccordion";
import Slider from "@mui/material/Slider";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const PriceFilter = ({ setPrice }) => {
  const [value, setValue] = React.useState([0, 3000000]);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPrice(newValue);
  };

  return (
    <div>
      <MyAccordion name="Цена">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          sx={{ color: "#669900" }}
          min={0}
          max={3000000}
        />
        <span>
          {value[0].toLocaleString("en-US")}&nbsp;
          {t("som")} - {value[1].toLocaleString("en-US")}&nbsp;
          {t("som")}
        </span>
      </MyAccordion>
    </div>
  );
};

export default memo(PriceFilter);
