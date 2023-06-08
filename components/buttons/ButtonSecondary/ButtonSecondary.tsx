import React, { MouseEventHandler } from 'react';
import styles from './ButtonSecondary.module.css'

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const ButtonSecondary: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.buttonSecondary} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonSecondary