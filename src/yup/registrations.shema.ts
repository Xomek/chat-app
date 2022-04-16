import * as yup from "yup";

export const validatationReg = yup.object({
   email: yup.string().email("Не верный email").required("Обязательное поле"),
   password: yup
      .string()
      .min(8, "Пароль слишком короткий")
      .required("Обязательное поле")
      .matches(RegExp("(.*[a-z].*)"), "Используйте маленькую букву")
      .matches(RegExp("(.*[A-Z].*)"), "Используйте большую букву"),
   confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .required("Обязательное поле"),
});
