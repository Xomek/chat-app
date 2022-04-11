import { Formik } from "formik";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { useAppDispath } from "../../redux/hooks";
import { asyncCreateUserCreator } from "../../redux/actions/user";
import * as yup from "yup";
import { mcl } from "../../misc/myClassNames";
import styles from "./RegistrationForm.module.scss";

import { Button, Form, Input } from "../UI";
import { Title } from "../common";

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
            <Form auth className={RegistrationFormStyles}>
               <Title formMode className={styles.title}>
                  Регистрация
               </Title>
               <label className={styles.label} htmlFor={"email"}>
                  Почта
               </label>
               <div className={styles.item}>
                  <Input type="text" name="email" onChange={handleChange} value={values.email} />
                  {touched.email && errors.email && <div className={styles.error}>{errors.email}</div>}
               </div>
               <label className={styles.label} htmlFor={"password"}>
                  Пароль
               </label>
               <div className={styles.item}>
                  <Input type="password" name="password" onChange={handleChange} value={values.password} />
                  {touched.password && errors.password && <div className={styles.error}>{errors.password}</div>}
               </div>
               <label className={styles.label} htmlFor={"confirm"}>
                  Подтвердите пароль
               </label>
               <div className={styles.item}>
                  <Input type="password" name="confirm" onChange={handleChange} value={values.confirm} />
                  {touched.confirm && errors.confirm && <div className={styles.error}>{errors.confirm}</div>}
               </div>

               <Button className={styles.button} border type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>
                  Регистрация
               </Button>
            </Form>
         )}
      </Formik>
   );
};

export default RegistrationForm;
