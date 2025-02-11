import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface RadioButtonsProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

export function RadioButtons({ options, value, onChange }: RadioButtonsProps) {
  return (
    <RadioGroup value={value} onValueChange={onChange}>
      {options.map(option => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
