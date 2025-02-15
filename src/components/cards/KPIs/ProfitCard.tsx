import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, ArrowUp, CreditCard, DollarSign } from 'lucide-react';

interface MetricCardProps {
  title: string;
  subtitle: string;
  value: string;
  change: number;
  type: 'increase' | 'decrease';
}

export function MetricCard({
  title,
  subtitle,
  value,
  change,
  type,
}: MetricCardProps) {
  const Icon = type === 'increase' ? CreditCard : DollarSign;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Icon
              className={`h-5 w-5 ${type === 'increase' ? 'text-red-500' : 'text-green-500'}`}
            />
            <div className="font-medium">{title}</div>
          </div>

          <div className="text-sm text-slate-400">{subtitle}</div>

          <div className="mt-1 text-2xl font-semibold">{value}</div>

          <div
            className={`flex items-center text-sm ${
              change >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {change >= 0 ? (
              <ArrowUp className="h-4 w-4" />
            ) : (
              <ArrowDown className="h-4 w-4" />
            )}
            {Math.abs(change)}% From Last month
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
