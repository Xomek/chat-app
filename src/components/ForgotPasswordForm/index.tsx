import { Formik } from "formik";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import * as yup from "yup";
import { mcl } from "../../misc/myClassNames";
import { Form, Button, Input } from "../UI";
import styles from "./ForgotPasswordForm.module.scss";

export interface ForgotPasswordFormProps extends BaseComponent {}

const ForgotPasswordForm = ({ className }: ForgotPasswordFormProps) => {
   const ForgotPasswordFormStyles = mcl(styles.forgotpasswordform, className);

   const validatationSchema = yup.object({
      email: yup.string().email("Не верный email").required("Обязательное поле"),
   });

   return (
      <Formik
         initialValues={{ email: "" }}
         onSubmit={(values) => {
            console.log(values);
         }}
         validationSchema={validatationSchema}
      >
         {({ values, errors, touched, handleChange, handleSubmit, isValid, dirty }) => (
            <Form className={ForgotPasswordFormStyles}>
               <label htmlFor="email">Почта</label>
               <Input type="text" name="email" onChange={handleChange} value={values.email} />
               {touched.email && errors.email && <div>{errors.email}</div>}
               <Button type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>
                  Отравить ссылку для восстановления
               </Button>
            </Form>
         )}
      </Formik>
   );
};

export default ForgotPasswordForm;
