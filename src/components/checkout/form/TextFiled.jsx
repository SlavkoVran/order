import React from 'react'
import { useField, ErrorMessage } from 'formik'
import styles from './_textField.module.scss'

export const TextFiled = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={styles.textFiledContainer}>
      <label htmlFor={field.name}>{label}<span>*</span> </label>
      <input
        {...field}
        {...props}
        autoComplete='off'
        className={meta.touched && meta.error ? styles.error : ''}
      />
      <div className={styles.errorMessageContainer}>
        <ErrorMessage component='div' className={styles.errorMessage} name={field.name} />
      </div>

    </div>
  )
}