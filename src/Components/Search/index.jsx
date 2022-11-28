import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useEffect } from "react";
import { memo } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useDebounce from "@hooks/useDebounce";
import style from "./search.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeVisibility } from "../../redux/reducers/visibility";

const conatiner = {
  maxWidth: "1338px",
  marginLeft: "auto",
  marginRight: "auto",
};

const Search = ({ searchNavbar }) => {
  const { t } = useTranslation();
  const { optimisedVersion, search, setSearch } = useDebounce();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchNavbar) {
      setSearch([]);
    }
  }, [searchNavbar]);

  return (
    <div className={`fixed-top ${style.search_container}`} style={conatiner}>
      {searchNavbar && (
        <>
          <div className="d-flex justify-content-center align-items-center">
            <Form className="w-75 animate__animated animate__fadeInDown">
              <Form.Control
                id={style.search_inp}
                type="search"
                placeholder={t("search")}
                aria-label="Search"
                onChange={optimisedVersion}
              />
            </Form>
          </div>
          {search.length > 0 && (
            <Box
              sx={{
                bgcolor: "whitesmoke",
                width: "75%",
                margin: "auto",
                overflow: "auto",
              }}
            >
              <List>
                {search?.map((el) => {
                  return (
                    <ListItem
                      button
                      key={el.id}
                      onClick={() => {
                        setSearch([]);
                        dispatch(changeVisibility(false));
                        navigate(
                          `/show-product/${el?.title.replace(/\s+/g, "-")}/${
                            el?.id
                          }`
                        );
                      }}
                    >
                      <img src={el?.banner} alt="404" width={50} />
                      <ListItemText
                        primary={el?.title}
                        secondary={el?.sub_title}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          )}
        </>
      )}
    </div>
  );
};
export default memo(Search);
