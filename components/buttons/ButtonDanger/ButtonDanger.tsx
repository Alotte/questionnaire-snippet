import React, { MouseEventHandler } from 'react';
import styles from './ButtonDanger.module.css'

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const ButtonDanger: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.buttonDanger} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonDanger