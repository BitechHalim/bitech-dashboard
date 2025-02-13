import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { initialServices } from '@/services/services-management/fake-db';
import AssignServiceDialog from '@/services/services-management/components/AssignServiceDialog';
import ServiceCard from './ServiceCard';

const ActiveServices = () => {
  const [showAssignDialog, setShowAssignDialog] = useState(false);

  return (
    <section>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Active Services</h2>
          <p className="text-muted-foreground">
            Manage and monitor your service integrations
          </p>
        </div>
        <Button onClick={() => setShowAssignDialog(true)}>
          Assign Service
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {initialServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <AssignServiceDialog
        open={showAssignDialog}
        onOpenChange={setShowAssignDialog}
        onAssign={data => {
          console.log(data);
          setShowAssignDialog(false);
        }}
      />
    </section>
  );
};

export default ActiveServices;
