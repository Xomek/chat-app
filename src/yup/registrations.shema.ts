import * as yup from "yup";

export const validatationReg = yup.object({
   email: yup.string().email("Не верный email").required("Обязательное поле"),
   password: yup.string().min(6).required("Обязательное поле"),
   confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .required("Обязательное поле"),
});
