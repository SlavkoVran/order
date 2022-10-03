import { useField, ErrorMessage } from "formik";
import styles from './_textField.module.scss'

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.textFiledContainer}>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? styles.error : ""}
      />
       <div className={styles.errorMessageContainer}>
        <ErrorMessage component='div' className={styles.errorMessage} name={field.name} />
      </div>
    </div>
  );
};
export default CustomSelect;