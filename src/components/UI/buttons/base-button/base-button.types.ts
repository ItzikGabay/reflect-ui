import React from 'react';

export interface BaseButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}
