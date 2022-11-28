import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import style from "./back.module.css";

const ScrollUpBtn = () => {
  const handleUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={style.main} onClick={handleUp}>
      <button className={style.btn}>
        <ArrowUpwardIcon />
      </button>
    </div>
  );
};

export default ScrollUpBtn;
