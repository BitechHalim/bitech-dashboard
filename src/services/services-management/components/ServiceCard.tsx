import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Activity, Settings } from 'lucide-react';

interface Company {
  name: string;
  clients: number;
  apiCalls: number;
  status: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  companies: Company[];
}

const ServiceCard = ({ service }: { service: Service }) => {
  const totalClients = service.companies.reduce(
    (sum, company) => sum + company.clients,
    0,
  );
  const totalApiCalls = service.companies.reduce(
    (sum, company) => sum + company.apiCalls,
    0,
  );

  return (
    <Card key={service.id}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">{service.name}</CardTitle>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </CardHeader>

      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">
          {service.description}
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total Clients</span>
            <span className="font-semibold">{totalClients}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">API Calls</span>
            <span className="font-semibold">
              {totalApiCalls.toLocaleString()}
            </span>
          </div>

          <div className="border-t pt-4">
            <h4 className="mb-2 text-sm font-medium">Assigned Companies</h4>
            <div className="flex flex-wrap gap-2">
              {service.companies.map((company, idx) => (
                <Badge
                  key={idx}
                  variant={company.status === 'active' ? 'success' : 'warning'}
                  className="flex items-center gap-1"
                >
                  <Activity className="h-3 w-3" />
                  {company.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
