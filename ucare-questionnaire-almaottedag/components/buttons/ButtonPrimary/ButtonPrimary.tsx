import React, { MouseEventHandler } from 'react';
import styles from './ButtonPrimary.module.css'

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const ButtonPrimary: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.buttonPrimary} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary