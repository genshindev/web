import React, { ButtonHTMLAttributes } from 'react';

import styles from '../styles/Button.module.scss';

type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={[styles.button, className].join(' ')} {...props}>
      {children}
    </button>
  );
}
