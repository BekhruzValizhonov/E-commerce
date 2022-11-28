import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const style = {
  width: "auto",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const h1 = {
  fontSize: "100px",
};

const btn = {
  outline: "none",
  border: "none",
  backgroundColor: "#669900",
  borderRadius: "5px",
};

const NoPage = () => {
  return (
    <>
      <div style={style}>
        <h1 style={h1}>404</h1>
        <button style={btn}>
          <Link to="/">
            <HomeIcon sx={{ color: "#fff", fontSize: "35px" }} />
          </Link>
        </button>
      </div>
    </>
  );
};

export default NoPage;
