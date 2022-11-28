import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyButton = ({ title, onClick, classBtn, style, disabled }) => {
  const btnStyle = {
    backgroundColor: "#0d6efd",
    color: "#fff",
    padding: ".35rem .375rem",
    borderRadius: ".375rem",
    opacity: "0.65",
    fontSize: "1.2rem",
    fontWeight: 400,
    border: "1px #0d6efd",
    width: "100%",
  };

  return (
    <button
      type="submit"
      className={`${classBtn}`}
      onClick={onClick}
      style={style === "total_btn" ? btnStyle : style}
      disabled={disabled ? disabled : false}
    >
      {title}
    </button>
  );
};

export const MyWarningBtn = ({
  style,
  link,
  title,
  icon,
  onClick,
  styleBtn,
}) => {
  return (
    <Link to={link}>
      <Button
        type="submit"
        variant="warning"
        className={style}
        onClick={onClick}
        style={styleBtn}
      >
        <b>{title}</b>
        {icon}
      </Button>
    </Link>
  );
};

export default MyButton;
