import { Formik } from "formik";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { useAppDispath } from "../../redux/hooks";
import { asyncCreateUserCreator } from "../../redux/actions/user";
import * as yup from "yup";
import { mcl } from "../../misc/myClassNames";
import styles from "./RegistrationForm.module.scss";

import { Button, Form, Input } from "../UI";

interface RegistrationFormProps extends BaseComponent {}

const RegistrationForm = ({ className }: RegistrationFormProps) => {
   const RegistrationFormStyles = mcl(styles.registrationform, className);

   const dispatch = useAppDispath();

   const handleRegistration = (email: string, password: string) => {
      dispatch(asyncCreateUserCreator({ email, password }));
   };

   const validatationSchema = yup.object({
      email: yup.string().email("Не верный email").required("Обязательное поле"),
      password: yup.string().min(6).required("Обязательное поле"),
      confirm: yup
         .string()
         .oneOf([yup.ref("password")], "Пароли не совпадают")
         .required("Обязательное поле"),
   });

   return (
      <Formik
         initialValues={{ email: "", password: "", confirm: "" }}
         onSubmit={(values) => {
            handleRegistration(values.email, values.password);
         }}
         validationSchema={validatationSchema}
      >
         {({ values, errors, touched, handleChange, handleSubmit, isValid, dirty }) => (
            <Form className={RegistrationFormStyles}>
               <label htmlFor={"email"}>Почта</label>
               <Input type="text" name="email" onChange={handleChange} value={values.email} />
               {touched.email && errors.email && <div>{errors.email}</div>}
               <label htmlFor={"password"}>Пароль</label>
               <Input type="password" name="password" onChange={handleChange} value={values.password} />
               {touched.password && errors.password && <div>{errors.password}</div>}
               <label htmlFor={"confirm"}>Подтвердите пароль</label>
               <Input type="password" name="confirm" onChange={handleChange} value={values.confirm} />
               {touched.confirm && errors.confirm && <div>{errors.confirm}</div>}
               <Button type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>
                  Регистрация
               </Button>
            </Form>
         )}
      </Formik>
   );
};

export default RegistrationForm;
