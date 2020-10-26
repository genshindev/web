import React, { InputHTMLAttributes, Ref, useEffect } from 'react';
import { DeepMap, FieldError } from 'react-hook-form/dist/types';

import styles from '../styles/InputField.module.scss';

type InputFieldProps = {
  label: string;
  required?: boolean;
  setValue: any;
  register: any;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  label,
  name,
  required,
  setValue,
  className,
  register,
  ...props
}: InputFieldProps) {
  const labelId = name + '-label';

  useEffect(() => {
    register({ name }, { required });
  }, []);

  return (
    <div className={styles.inputField}>
      <label className={styles.label} title={label} id={labelId} htmlFor={name}>
        {label}
      </label>
      <input
        className={[styles.input, className].join(' ')}
        name={name}
        placeholder={label}
        onChange={(event) => setValue(event.target.name, event.target.value)}
        aria-labelledby={labelId}
        aria-label={label}
        required={required}
        title={label}
        {...props}
      />
    </div>
  );
}
