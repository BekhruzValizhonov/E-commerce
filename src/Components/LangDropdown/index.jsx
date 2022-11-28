import React, { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { memo } from "react";

const useStyles = makeStyles({
  select: {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#669900",
    },

    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "none",
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
});

const LangDropdown = () => {
  const { i18n } = useTranslation();
  const [lang, setlang] = useState(i18n.language);

  const handleLangChange = (event) => {
    setlang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.root}>
        <Select
          MenuProps={{ disableScrollLock: true }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label=""
          onChange={handleLangChange}
          className={classes.select}
        >
          <MenuItem value="ru">
            <img
              src="https://www.worldometers.info/img/flags/small/tn_rs-flag.gif"
              alt=""
              width={35}
              height={20}
            />
          </MenuItem>
          <MenuItem value="uz">
            <img
              src="https://www.worldometers.info/img/flags/small/tn_uz-flag.gif"
              alt=""
              width={35}
              height={20}
            />
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default memo(LangDropdown);
