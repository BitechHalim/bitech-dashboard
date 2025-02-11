'use client';

import { TrendingUp } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import DropDownCTAs from '@/components/common/DropDownCTAs';

const chartData = [
  { month: 'January', desktop: 86 },
  { month: 'February', desktop: 95 },
  { month: 'March', desktop: 67 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 89 },
  { month: 'June', desktop: 78 },
];

export function ProgressBarCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Progress Bars - Percentage</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </div>
        <DropDownCTAs
          options={[
            { label: 'View Trends', onClick: () => {} },
            { label: 'Set Target', onClick: () => {} },
          ]}
        />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {chartData.map((data, index) => (
            <div
              key={index}
              className="group space-y-1 transition-all hover:scale-[1.01]"
            >
              <div className="flex justify-between text-sm">
                <span>{data.month}</span>
                <span>{data.desktop}%</span>
              </div>
              <div className="relative h-4 w-full rounded bg-muted">
                <div
                  className="absolute h-4 rounded bg-primary transition-all group-hover:bg-secondary-foreground"
                  style={{ width: `${data.desktop}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="group flex gap-2 font-medium leading-none transition-transform hover:scale-[1.05]">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing progress for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
