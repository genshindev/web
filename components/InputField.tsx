/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import React, { InputHTMLAttributes, RefObject } from 'react';
import { FieldError } from 'react-hook-form';

import styles from '../styles/InputField.module.scss';

interface InputFieldProps {
  label: string;
  error?: FieldError;
  errorMessage?: string;
  required?: boolean;
}

const InputField = React.forwardRef<
  HTMLInputElement,
  InputFieldProps & InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      label,
      name,
      error,
      required,
      errorMessage,
      className,
      ...props
    }: InputFieldProps & InputHTMLAttributes<HTMLInputElement>,
    ref: RefObject<HTMLInputElement>,
  ) => {
    const labelId = name + '-label';

    return (
      <div className={styles.inputField}>
        <label
          className={styles.label}
          title={label}
          id={labelId}
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className={[styles.input, className].join(' ')}
          name={name}
          ref={ref}
          placeholder={label}
          aria-labelledby={labelId}
          aria-label={label}
          required={required}
          title={label}
          {...props}
        />
        {error && <span className={styles.error}>{errorMessage}</span>}
      </div>
    );
  },
);

export default InputField;
