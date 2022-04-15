import * as yup from "yup";

export const validatationForgot = yup.object({
   email: yup.string().email("Не верный email").required("Обязательное поле"),
});
