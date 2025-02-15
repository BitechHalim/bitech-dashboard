import React from 'react';
import { MetricCard } from '@/components/cards/KPIs/MetricCard';
import { metrics } from '@/services/services-management/fake-db';

const DashboardOverview = () => {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Dashboard Overview
        </h2>
        <p className="text-muted-foreground">
          Monitor your key performance indicators at a glance
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </section>
  );
};

export default DashboardOverview;
