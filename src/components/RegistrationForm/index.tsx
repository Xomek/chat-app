import { Formik } from "formik";
import styles from "./RegistrationForm.module.scss";

import { Button, Form, Input } from "../UI";

const RegistrationForm = () => {
   return (
      <Formik
         initialValues={{ email: "", password: "", confirm: "" }}
         onSubmit={(values) => {
            console.log(values);
         }}
      >
         {({ values, handleChange, handleSubmit, isValid, dirty }) => (
            <Form className={styles.registrationform}>
               <Input type="text" name="email" onChange={handleChange} value={values.email} />
               <Input type="password" name="password" onChange={handleChange} value={values.password} />
               <Input type="password" name="confirm" onChange={handleChange} value={values.confirm} />
               <Button type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>
                  Регистрация
               </Button>
            </Form>
         )}
      </Formik>
   );
};

export default RegistrationForm;
