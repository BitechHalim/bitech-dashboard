import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import React from 'react';
import { FormFieldProps } from '@/components/forms/FormElements/types';
import { FieldInfo } from '@/components/forms/FormElements/FieldInfo';

export function FormField({
  field,
  label,
  type,
  id,
  placeholder,
  rightElement,
}: FormFieldProps) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center">
        <Label htmlFor={id}>{label}</Label>
        {rightElement}
      </div>
      <Input
        id={id}
        type={type}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={e => field.handleChange(e.target.value)}
        placeholder={placeholder}
        required
      />
      <FieldInfo field={field} />
    </div>
  );
}
