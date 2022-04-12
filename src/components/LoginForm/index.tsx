import { Formik } from "formik";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { asyncLoginUserCreator } from "../../redux/actions/user";
import { validatationLogin } from "../../yup/login.shema";
import { useAppDispath } from "../../redux/hooks";
import { mcl } from "../../misc/myClassNames";
import styles from "./LoginForm.module.scss";

import { Button, Form, Input } from "../UI";
import { Title } from "../common";

interface LoginFormProps extends BaseComponent {}

const LoginForm = ({ className }: LoginFormProps) => {
   const LoginFormStyles = mcl(styles.loginform, className);

   const dispatch = useAppDispath();

   const handleLogin = (email: string, password: string) => {
      dispatch(asyncLoginUserCreator({ email, password }));
   };

   return (
      <Formik
         initialValues={{ email: "", password: "" }}
         onSubmit={(values) => {
            handleLogin(values.email, values.password);
         }}
         validationSchema={validatationLogin}
      >
         {({ values, errors, touched, handleChange, handleSubmit, isValid, dirty }) => (
            <Form auth className={LoginFormStyles}>
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
            </Form>
         )}
      </Formik>
   );
};

export default LoginForm;
