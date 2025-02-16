import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { CircleCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  metadata?: Record<string, any>;
}

export interface RadioCardGroupProps {
  options: RadioOption[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
  cardClassName?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const RadioCardGroup = ({
  options,
  defaultValue,
  value,
  onChange,
  name,
  className = '',
  cardClassName = '',
  icon: DefaultIcon,
}: RadioCardGroupProps): React.ReactNode => {
  return (
    <div>
      <RadioGroup.Root
        defaultValue={defaultValue || options[0]?.value}
        value={value}
        onValueChange={onChange}
        name={name}
        className={cn('flex gap-4 overflow-x-auto px-1 py-4', className)}
        style={{
          maskImage: 'linear-gradient(to right, black 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, black 90%, transparent 100%)',
        }}
      >
        {options.map(option => (
          <RadioGroup.Item
            key={option.value}
            value={option.value}
            className={cn(
              'group relative rounded-[--radius] px-3 py-2 text-start',
              'bg-card text-card-foreground',
              'ring-[1px] ring-border',
              'hover:bg-muted/50',
              'data-[state=checked]:ring-2 data-[state=checked]:ring-primary',
              'transition-all duration-200',
              'w-[calc(25%-12px)] flex-shrink-0', // 25% width with gap consideration
              'min-w-[200px]', // Prevent cards from becoming too narrow
              cardClassName,
            )}
          >
            <CircleCheck
              className={cn(
                'absolute right-0 top-0 h-6 w-6 -translate-y-1/2 translate-x-1/2',
                'fill-primary stroke-background',
                'group-data-[state=unchecked]:hidden',
              )}
            />

            {option.icon ||
              (DefaultIcon && (
                <DefaultIcon className="mb-2.5 h-5 w-5 text-muted-foreground" />
              ))}
            <span className="mb-1 block font-semibold tracking-tight">
              {option.label}
            </span>
            {option.description && (
              <p className="text-xs text-muted-foreground">
                {option.description}
              </p>
            )}
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
};

export default RadioCardGroup;
