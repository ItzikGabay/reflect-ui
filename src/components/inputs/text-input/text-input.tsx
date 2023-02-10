import React from 'react';
import styles from './text-input.module.scss';
import { TextInputProps } from './text-input.types';

export const TextInput = ({
  label,
  value,
  onChange,
  ...props
}: TextInputProps) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input value={value} onChange={onChange} {...props} />
    </div>
  );
};
