import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, ArrowUp, CreditCard, DollarSign } from 'lucide-react';

interface ProfitCardProps {
  title: string;
  subtitle: string;
  value: string;
  change: number;
  type: 'increase' | 'decrease';
}

const ICONS = {
  increase: CreditCard,
  decrease: DollarSign,
};

export function ProfitCard({
  title,
  subtitle,
  value,
  change,
  type,
}: ProfitCardProps) {
  const Icon = ICONS[type];
  const isPositiveChange = change >= 0;
  const changeColor = isPositiveChange ? 'text-green-500' : 'text-red-500';

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Icon
              className={`h-5 w-5 ${type === 'increase' ? 'text-red-500' : 'text-green-500'}`}
            />
            <span className="font-medium">{title}</span>
          </div>
          <p className="text-sm text-slate-400">{subtitle}</p>
          <p className="mt-1 text-2xl font-semibold">{value}</p>
          <div className={`flex items-center text-sm ${changeColor}`}>
            {isPositiveChange ? (
              <ArrowUp className="h-4 w-4" />
            ) : (
              <ArrowDown className="h-4 w-4" />
            )}
            <span>{Math.abs(change)}% From Last month</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
