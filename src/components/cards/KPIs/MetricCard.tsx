import { Card, CardContent } from '@/components/ui/card';

export interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  iconColor: string;
}

export function MetricCard({ icon, title, value, iconColor }: MetricCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center">
          <div className={`h-8 w-8 ${iconColor}`}>{icon}</div>
          <div className="ml-4">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
