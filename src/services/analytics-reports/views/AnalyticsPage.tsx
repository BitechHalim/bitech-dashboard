import { Building2, Users, Activity, TrendingUp } from 'lucide-react';
import MetricsCard from '@/components/cards/KPIs/MetricsCard';
import AnalyticsTabs from '@/services/analytics-reports/components/AnalyticsTabs';

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricsCard
          title="Total Companies"
          value="245"
          change="+20% from last month"
          Icon={Building2}
        />
        <MetricsCard
          title="Active Services"
          value="873"
          change="+12% from last month"
          Icon={Activity}
        />
        <MetricsCard
          title="Active Users"
          value="1,234"
          change="+4% from last month"
          Icon={Users}
        />
        <MetricsCard
          title="Growth Rate"
          value="15%"
          change="+2% from last month"
          Icon={TrendingUp}
        />
      </div>

      <AnalyticsTabs />
    </div>
  );
}
