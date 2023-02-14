import React from 'react';
import { BaseButtonProps } from './base-button.types';
import styles from './base-button.module.scss';

export const BaseButton = ({
  label,
  variant,
  disabled,
  onClick,
  children,
  ...props
}: BaseButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.container} ${variant ? styles[variant] : ''}`}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children || label}
      </button>
    </div>
  );
};
