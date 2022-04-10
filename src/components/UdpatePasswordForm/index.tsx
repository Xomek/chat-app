import { Formik } from "formik";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import * as yup from "yup";
import { mcl } from "../../misc/myClassNames";
import { Button, Form, Input } from "../UI";
import styles from "./UdpatePasswordForm.module.scss";

export interface UdpatePasswordFormProps extends BaseComponent {}

const UdpatePasswordForm = ({ className }: UdpatePasswordFormProps) => {
   const UpdatePasswordFormStyles = mcl(styles.udpatepasswordform, className);

   const validatationSchema = yup.object({
      password: yup.string().min(6).required("Обязательное поле"),
      confirm: yup
         .string()
         .oneOf([yup.ref("password")], "Пароли не совпадают")
         .required("Обязательное поле"),
   });

   return (
      <Formik
         initialValues={{ password: "", confirm: "" }}
         onSubmit={(values) => {
            console.log(values);
         }}
         validationSchema={validatationSchema}
      >
         {({ values, errors, touched, handleChange, handleSubmit, isValid, dirty }) => (
            <Form className={UpdatePasswordFormStyles}>
               <label htmlFor="name">Пароль</label>
               <Input type="text" name="password" onChange={handleChange} value={values.password} />
               {touched.password && errors.password && <div>{errors.password}</div>}
               <label htmlFor="name">Подтверждение пароля</label>
               <Input type="text" name="confirm" onChange={handleChange} value={values.confirm} />
               {touched.confirm && errors.confirm && <div>{errors.confirm}</div>}
               <Button type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>
                  Отравить ссылку для восстановления
               </Button>
            </Form>
         )}
      </Formik>
   );
};

export default UdpatePasswordForm;
