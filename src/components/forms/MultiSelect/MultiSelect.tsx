'use client';
import React from 'react';
import { MultiSelect } from '@/components/ui/multi-select';

type Variant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'inverted'
  | null
  | undefined;

interface MultiSelectDropdownProps {
  options: { value: string; label: string; icon?: React.ComponentType }[];
  value: string[];
  onChange: (selected: string[]) => void;
  placeholder: string;
  variant?: Variant;
  animation?: number;
  maxCount?: number;
}

const MultiSelectDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  variant = 'default',
  animation = 0,
  maxCount = 5,
}: MultiSelectDropdownProps) => {
  const handleValueChange = (newValues: string[]) => {
    if (newValues.length <= maxCount) {
      onChange(newValues); // Notify the parent of the updated selection
    }
  };

  return (
    <MultiSelect
      options={options}
      onValueChange={handleValueChange}
      value={value}
      placeholder={placeholder}
      variant={variant}
      animation={animation}
      maxCount={maxCount}
    />
  );
};

export default MultiSelectDropdown;
