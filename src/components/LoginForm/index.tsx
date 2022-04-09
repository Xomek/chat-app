import { Formik } from "formik";
import styles from "./LoginForm.module.scss";

import { Button, Form, Input } from "../UI";

const LoginForm = () => {
   return (
      <Formik
         initialValues={{ email: "", password: "" }}
         onSubmit={(values) => {
            console.log(values);
         }}
      >
         {({ values, handleChange, handleSubmit, isValid, dirty }) => (
            <Form className={styles.loginform}>
               <Input type="text" name="email" onChange={handleChange} value={values.email} />
               <Input type="password" name="password" onChange={handleChange} value={values.password} />
               <Button type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>
                  Войти
               </Button>
            </Form>
         )}
      </Formik>
   );
};

export default LoginForm;