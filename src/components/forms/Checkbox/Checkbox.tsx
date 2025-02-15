'use client';

import { Checkbox as ShadcnCheckbox } from '@/components/ui/checkbox';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function Checkbox({
  id,
  label,
  checked,
  onCheckedChange,
}: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <ShadcnCheckbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
