import { Formik } from "formik";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { useAppDispath } from "../../redux/hooks";
import { validatationReg } from "../../yup/registrations.shema";
import { asyncCreateUserCreator } from "../../redux/actions/user";
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

   return (
      <Formik
         initialValues={{ email: "", password: "", confirm: "" }}
         onSubmit={(values) => {
            handleRegistration(values.email, values.password);
         }}
         validationSchema={validatationReg}
      >
         {({ values, errors, touched, handleChange, handleSubmit, isValid, dirty }) => (
            <Form auth className={RegistrationFormStyles}>
               <Title formMode className={styles.title}>
                  Регистрация
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
               <Input
                  type="password"
                  name="confirm"
                  label="Подтвердите пароль"
                  onChange={handleChange}
                  value={values.confirm}
                  errors={errors.confirm}
                  touched={touched.confirm}
               />

               <Button className={styles.button} border type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>
                  Регистрация
               </Button>
            </Form>
         )}
      </Formik>
   );
};

export default RegistrationForm;
