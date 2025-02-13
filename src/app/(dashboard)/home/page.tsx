import React from 'react';
import { ProfitCard } from '@/components/cards/KPIs/ProfitCard';
import { KPI2Card } from '@/components/cards/KPIs/KPI2Card';
import List from '@/components/lists/List';
import BasicListItem from '@/components/lists/BasicListItem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig } from '@/components/ui/chart';

// Types
interface ProfitCardData {
  title: string;
  subtitle: string;
  value: string;
  change: number;
}

// Data
const metrics: ProfitCardData[] = [
  {
    title: 'Total Companies',
    subtitle: 'Last Week',
    value: '256',
    change: 12,
  },
  {
    title: 'Active Services',
    subtitle: 'Last Week',
    value: '1,234',
    change: 8,
  },
  {
    title: 'Total Users',
    subtitle: 'Last Week',
    value: '3,123',
    change: -2,
  },
];

const salesData = {
  chartData: [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ],
  chartConfig: {
    desktop: {
      label: 'Desktop',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies ChartConfig,
  cardProps: {
    title: 'Sales',
    subtitle: 'Last Year',
    metric: '175k',
    change: -16.2,
    dataKey: 'desktop',
  },
};

const recentActivityData = [
  {
    text: 'New Company Registered',
    secondaryText: '2 hours ago',
    icon: <div className="h-2 w-2 rounded-full bg-primary"></div>,
  },
  {
    text: 'New Company Registered',
    secondaryText: '2 hours ago',
    icon: <div className="h-2 w-2 rounded-full bg-primary"></div>,
  },
  {
    text: 'New Company Registered',
    secondaryText: '2 hours ago',
    icon: <div className="h-2 w-2 rounded-full bg-primary"></div>,
  },
  {
    text: 'New Company Registered',
    secondaryText: '2 hours ago',
    icon: <div className="h-2 w-2 rounded-full bg-primary"></div>,
  },
];

// Components
const RecentActivityCard = () => (
  <Card>
    <CardHeader className="pb-0">
      <CardTitle>Recent Activity</CardTitle>
    </CardHeader>
    <CardContent className="p-4">
      <List ListItem={BasicListItem} data={recentActivityData} />
    </CardContent>
  </Card>
);

const Page = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <ProfitCard
            key={index}
            title={metric.title}
            subtitle={metric.subtitle}
            value={metric.value}
            change={metric.change}
            type="increase"
          />
        ))}

        <div className="col-span-2">
          <KPI2Card
            {...salesData.cardProps}
            data={salesData.chartData}
            chartConfig={salesData.chartConfig}
          />
        </div>

        <div className="col-span-2">
          <RecentActivityCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
