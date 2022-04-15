import { Formik } from "formik";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { asyncLoginUserCreator, asyncResetUserPassword } from "../../redux/actions/user";
import { userCredentials } from "../../interfaces/userCredentials.interface";
import { validatationLogin } from "../../yup/login.shema";
import { useAppDispath, useAppSelector } from "../../redux/hooks";
import { mcl } from "../../misc/myClassNames";
import styles from "./LoginForm.module.scss";

import { Button, Form, Input } from "../UI";
import { Title } from "../common";
import { Link } from "react-router-dom";

interface LoginFormProps extends BaseComponent {}

const LoginForm = ({ className }: LoginFormProps) => {
   const serverError = useAppSelector((state) => state.user.error);
   const LoginFormStyles = mcl(styles.loginform, className);

   const dispatch = useAppDispath();

   const handleLogin = ({ email, password }: userCredentials) => {
      dispatch(asyncLoginUserCreator({ email, password }));
   };

   return (
      <Formik
         initialValues={{ email: "", password: "" }}
         onSubmit={(values) => {
            handleLogin(values);
         }}
         validationSchema={validatationLogin}
      >
         {({ values, errors, touched, handleChange, handleSubmit, isValid, dirty }) => (
            <Form auth className={LoginFormStyles}>
               {serverError && <div className={styles.serverError}>{serverError}</div>}
               <Title formMode className={styles.title}>
                  Авторизация
               </Title>
               <Input
                  type="text"
                  name="email"
                  label="Почта"
                  onChange={handleChange}
                  value={values.email}
                  errors={errors.email}
                  touched={touched.email}
               />
               <Input
                  type="password"
                  name="password"
                  label="Пароль"
                  onChange={handleChange}
                  value={values.password}
                  errors={errors.password}
                  touched={touched.password}
               />
               <Button className={styles.button} border type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>
                  Войти
               </Button>
               <div className={styles.links}>
                  <Link className={styles.link} to="/registration">
                     Регистрация
                  </Link>
                  <Link className={styles.link} to="/forgot">
                     Забыли пароль?
                  </Link>
               </div>
            </Form>
         )}
      </Formik>
   );
};

export default LoginForm;
