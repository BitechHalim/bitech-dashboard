import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChartCard } from '@/components/charts/PieChartCard';
import { BarChartCard } from '@/components/charts/BarChartCard';
import { AreaChartCard } from '@/components/charts/AreaChartCard';

export default function AnalyticsTabs() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="services">Services</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <AreaChartCard />
          <PieChartCard />
        </div>
      </TabsContent>

      <TabsContent value="services" className="space-y-4">
        <BarChartCard />
      </TabsContent>

      <TabsContent value="analytics" className="space-y-4">
        <div className="rounded-lg border bg-muted p-4">
          <p className="text-sm text-muted-foreground">
            Detailed analytics content will be displayed here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
