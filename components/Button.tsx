import React, { ButtonHTMLAttributes } from 'react';

import styles from '../styles/Button.module.scss';

const Button = ({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={[styles.button, className].join(' ')} {...props}>
      {children}
    </button>
  );
}

export default Button;