import React from 'react';
import { TypographyProps } from './typography.types';
import styles from './typography.module.scss';

// TODO: Add font-weight, line-height, letter-spacing, color.

export const Typography = ({
  label,
  textProps,
  containerProps,
  variant = 'md',
  as = 'p', // element-type
}: TypographyProps) => {
  const TextElement = as;

  return (
    <div className={styles.container} {...containerProps}>
      <TextElement
        className={`${styles.text} ${styles[variant]}`}
        {...textProps}
      >
        {label}
      </TextElement>
    </div>
  );
};
