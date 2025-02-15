import { FieldApi } from '@tanstack/form-core';
import React from 'react';

export interface FieldProps {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  field: FieldApi<any, any, any, any>;
}

export interface FormFieldProps {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  field: FieldApi<any, any, any, any>;
  label: string;
  type: 'email' | 'password' | 'text';
  id: string;
  placeholder?: string;
  rightElement?: React.ReactNode;
}

export interface SubmitButtonProps {
  canSubmit: boolean;
  isSubmitting: boolean;
}

export interface FormProps extends React.ComponentPropsWithoutRef<'form'> {
  className?: string;
}
