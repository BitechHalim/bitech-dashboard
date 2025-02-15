'use client';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import ActiveServices from '@/services/services-management/components/ActiveServices';
import DashboardOverview from '@/services/services-management/components/DashboardOverview';

const ServicesList = () => {
  return (
    <div className="space-y-8">
      <DashboardOverview />
      <Separator className="my-8" />
      <ActiveServices />
    </div>
  );
};

export default ServicesList;
