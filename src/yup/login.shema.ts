import * as yup from "yup";

export const validatationLogin = yup.object({
   email: yup.string().email("Не верный email").required("Обязательное поле"),
   password: yup.string().min(6, "Пароль слишком короткий").required("Обязательное поле"),
});
