import React from 'react';
import styles from './text-input.module.scss';
import { TextInputProps } from './text-input.types';
import { addClassByCondition } from '../../../lib/utils/styles';

export const TextInput = ({
  label,
  value,
  onChange,
  errorLabel,
  successLabel,
  showError,
  showSuccess,
  disabled,
  ...props
}: TextInputProps) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${addClassByCondition(
          showError,
          styles.error
        )} ${addClassByCondition(
          showSuccess,
          styles.success
        )} ${addClassByCondition(disabled, styles.disabled)}`}
      >
        <label>{label}</label>
        <input
          value={value}
          onChange={onChange}
          {...props}
          disabled={disabled}
        />
      </div>
      {!showSuccess && showError && errorLabel && (
        <span className={styles.error_label}>{errorLabel}</span>
      )}
      {!showError && showSuccess && successLabel && (
        <span className={styles.success_label}>{successLabel}</span>
      )}
    </div>
  );
};
