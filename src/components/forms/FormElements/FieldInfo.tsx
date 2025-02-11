import React from 'react';
import { FieldProps } from '@/components/forms/FormElements/types';

export const FieldInfo = ({ field }: FieldProps) => {
  return (
    <div className="text-xs text-red-600">
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(', ')}</em>
      ) : null}
      {field.state.meta.isValidating ? (
        <span className="text-blue-600">Validating...</span>
      ) : null}
    </div>
  );
};
