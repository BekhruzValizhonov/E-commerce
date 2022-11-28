import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import useDebounce from "@hooks/useDebounce";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeVisibilityDialog } from "@redux/reducers/visibility";
import style from "./dialog.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog({ open, handleClose }) {
  const { optimisedVersion, search, setSearch } = useDebounce();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleNavigate = (title, id) => {
    setSearch([]);
    navigate(`/show-product/${title.replace(/\s+/g, "-")}/${id}`);
  };

  React.useEffect(() => {
    if (!id) return;
    dispatch(changeVisibilityDialog(false));
  }, [id]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      className={style.dialog}
    >
      <AppBar sx={{ position: "relative", background: "#669900" }}>
        <Toolbar>
          <div className="w-100">
            <input
              className={`${style.input} w-100`}
              placeholder={t("search")}
              type="text"
              name=""
              id=""
              autoFocus={!open ? false : true}
              onChange={optimisedVersion}
            />
          </div>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
        {search?.map((el) => {
          return (
            <ListItem
              button
              key={el.id}
              onClick={() => handleNavigate(el?.title, el?.id)}
            >
              <img src={el?.banner} alt="404" width={50} />
              <ListItemText primary={el?.title} secondary={el?.sub_title} />
            </ListItem>
          );
        })}
      </List>
    </Dialog>
  );
}

export default memo(FullScreenDialog);
