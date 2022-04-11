import { Formik } from "formik";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import * as yup from "yup";
import { asyncLoginUserCreator } from "../../redux/actions/user";
import { useAppDispath } from "../../redux/hooks";
import { mcl } from "../../misc/myClassNames";
import styles from "./LoginForm.module.scss";

import { Button, Form, Input } from "../UI";

interface LoginFormProps extends BaseComponent {}

const LoginForm = ({ className }: LoginFormProps) => {
   const LoginFormStyles = mcl(styles.loginform, className);

   const dispatch = useAppDispath();

   const handleLogin = (email: string, password: string) => {
      dispatch(asyncLoginUserCreator({ email, password }));
   };

   const validatationSchema = yup.object({
      email: yup.string().email("Не верный email").required("Обязательное поле"),
      password: yup.string().min(6).required("Обязательное поле"),
   });
   return (
      <Formik
         initialValues={{ email: "", password: "" }}
         onSubmit={(values) => {
            handleLogin(values.email, values.password);
         }}
         validationSchema={validatationSchema}
      >
         {({ values, errors, touched, handleChange, handleSubmit, isValid, dirty }) => (
            <Form className={LoginFormStyles}>
               <label htmlFor="name">Почта</label>
               <Input type="text" name="email" onChange={handleChange} value={values.email} />
               {touched.email && errors.email && <div>{errors.email}</div>}
               <label htmlFor="password">Пароль</label>
               <Input type="password" name="password" onChange={handleChange} value={values.password} />
               {touched.password && errors.password && <div>{errors.password}</div>}
               <Button type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>
                  Войти
               </Button>
            </Form>
         )}
      </Formik>
   );
};

export default LoginForm;
