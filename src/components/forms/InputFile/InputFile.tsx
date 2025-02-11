import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFileProps {
  value: File | null;
  onChange: (file: File | null) => void;
}

export function InputFile({ value, onChange }: InputFileProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    onChange(file);
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="file">File</Label>
      <Input id="file" type="file" onChange={handleChange} />
      {value && <p>{value.name}</p>}
    </div>
  );
}
