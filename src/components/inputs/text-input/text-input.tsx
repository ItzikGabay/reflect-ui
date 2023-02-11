import React from 'react';
import styles from './text-input.module.scss';
import { TextInputProps } from './text-input.types';
import { addClassByCondition } from '../../../lib/utils/styles';

export const TextInput = ({
  label,
  value,
  onChange,
  showError = false,
  errorLabel = '',
  showSuccess = false,
  successLabel = '',
  ...props
}: TextInputProps) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${addClassByCondition(
          showError,
          styles.error
        )} ${addClassByCondition(showSuccess, styles.success)}`}
      >
        <label>{label}</label>
        <input value={value} onChange={onChange} {...props} />
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
