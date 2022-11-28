import React from "react";
import { memo } from "react";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";

const Selects = ({ style, sortSelect, setSortSelect, limit, setLimit }) => {
  const { t } = useTranslation();
  const show = [t("show32"), t("show48"), t("show55"), t("show60")];
  const sort = [t("defaultSort"), t("popularSort")];

  return (
    <>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => setSortSelect(e.target.value)}
        value={sortSelect}
        className={`${style.selects}`}
      >
        {sort.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => setLimit(e.target.value)}
        value={limit}
        className={`${style.selects}`}
      >
        {show.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
};

export default memo(Selects);
