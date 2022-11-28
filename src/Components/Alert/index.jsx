import { Alert } from "@mui/material";
import { useTranslation } from "react-i18next";

const Congratulation = () => {
  const { t } = useTranslation();
  return (
    <Alert
      variant="filled"
      severity="success"
      className="animate__animated animate__bounceInRight"
    >
      {t("congurulation")}
    </Alert>
  );
};

export default Congratulation;
