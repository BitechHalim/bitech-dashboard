'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

interface DataPoint {
  month: string;
  [key: string]: number | string;
}

interface KPI2CardProps {
  title: string;
  subtitle: string;
  data: DataPoint[];
  metric: string;
  change: number;
  chartConfig: ChartConfig;
  dataKey: string;
}

export function KPI2Card({
  title,
  subtitle,
  data,
  metric,
  change,
  chartConfig,
  dataKey,
}: KPI2CardProps) {
  const isNegative = change < 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey={dataKey}
              type="natural"
              fill={`var(--color-${dataKey})`}
              fillOpacity={0.4}
              stroke={`var(--color-${dataKey})`}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-row items-center justify-between gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {metric} <TrendingUp className="h-4 w-4" />
        </div>
        <div
          className={`leading-none ${isNegative ? 'text-destructive' : 'text-emerald-500'}`}
        >
          {change > 0 ? '+' : ''}
          {change}%
        </div>
      </CardFooter>
    </Card>
  );
}
