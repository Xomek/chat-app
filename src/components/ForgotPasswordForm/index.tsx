import { FC } from "react";
import { Formik } from "formik";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { validatationForgot } from "../../yup/forgot.shema";
import { asyncResetUserPassword } from "../../redux/actions/user";
import { useAppDispath, useAppSelector } from "../../redux/hooks";
import { mcl } from "../../misc/myClassNames";
import { Form, Button, Input } from "../UI";
import styles from "./ForgotPasswordForm.module.scss";
import { Link } from "react-router-dom";
import { Title } from "../common";

export interface ForgotPasswordFormProps extends BaseComponent {}

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ className }) => {
   const serverError = useAppSelector((state) => state.user.error);
   const dispatch = useAppDispath();
   const ForgotPasswordFormStyles = mcl(styles.forgotpasswordform, className);

   const resetPassword = (email: string) => {
      dispatch(asyncResetUserPassword({ email }));
   };

   return (
      <Formik
         initialValues={{ email: "" }}
         onSubmit={(values) => {
            resetPassword(values.email);
         }}
         validationSchema={validatationForgot}
      >
         {({ values, errors, touched, handleChange, handleSubmit, isValid, dirty }) => (
            <Form auth className={ForgotPasswordFormStyles}>
               {serverError && <div className={styles.serverError}>{serverError}</div>}
               <Title formMode className={styles.title}>
                  Забыли пароль?
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
               <Button border type="submit" disabled={!isValid && !dirty} onClick={handleSubmit} className={styles.button}>
                  Восстановить
               </Button>
               <Link className={styles.link} to="/login">
                  Войти
               </Link>
            </Form>
         )}
      </Formik>
   );
};

export default ForgotPasswordForm;
