import { Input as ShadcnInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Input({ label, value, onChange, ...props }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{label}</Label>
      <ShadcnInput {...props} value={value} onChange={handleChange} />
    </div>
  );
}
