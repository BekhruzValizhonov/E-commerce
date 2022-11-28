import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const nameRegExp = /^[a-zA-Z\-а-яА-Я]+$/;

function validation(t) {
  const checkOutScheme = Yup.object().shape({
    full_name: Yup.string()
      .matches(nameRegExp, t("langError"))
      .typeError(t("langError"))
      .required(`${t("required")}*`)
      .min(4, t("nameError")),
    phone_number: Yup.string()
      .matches(phoneRegExp, t("phoneError"))
      .min(9, t("phoneError"))
      .max(9, t("phoneMax"))
      .required(`${t("required")}*`),
  });

  return { checkOutScheme };
}

export default validation;
