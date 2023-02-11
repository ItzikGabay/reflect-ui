import React from 'react';

export interface TextInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showError?: boolean;
  errorLabel?: string;
  showSuccess?: boolean;
  successLabel?: string;
}
