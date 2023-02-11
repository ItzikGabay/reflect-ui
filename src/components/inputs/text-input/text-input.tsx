import React from 'react';
import styles from './text-input.module.scss';
import { TextInputProps } from './text-input.types';
import { addClassByCondition } from '../../../lib/utils/styles';

export const TextInput = ({
  label,
  value,
  onChange,
  showError = false,
  ...props
}: TextInputProps) => {
  return (
    <div
      className={`${styles.container} ${addClassByCondition(
        showError,
        styles.error
      )}`}
    >
      <label>{label}</label>
      <input value={value} onChange={onChange} {...props} />
    </div>
  );
};
