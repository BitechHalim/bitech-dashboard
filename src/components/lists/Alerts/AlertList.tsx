'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AlertItem from '@/components/lists/Alerts/AlertItem';

type Priority = 'success' | 'info' | 'warning' | 'error';

interface Alert {
  id: string;
  title: string;
  message: string;
  priority: Priority;
  timestamp: Date;
}

const AlertList = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      title: 'New Update Available',
      message: 'A new version of the platform is ready to install.',
      priority: 'info',
      timestamp: new Date(),
    },
    {
      id: '2',
      title: 'Resource Usage Alert',
      message: 'Database capacity reaching 80% threshold.',
      priority: 'warning',
      timestamp: new Date(),
    },
    {
      id: '3',
      title: 'Critical System Error',
      message: 'Database synchronization failed. Retry initiated.',
      priority: 'error',
      timestamp: new Date(),
    },
    {
      id: '4',
      title: 'Success Notification',
      message: 'Database synchronization completed successfully.',
      priority: 'success',
      timestamp: new Date(),
    },
  ]);

  const handleDismiss = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const handleDismissAll = () => {
    setAlerts([]);
  };

  const handleViewAll = () => {
    console.log('Navigate to all alerts');
  };

  return (
    <div className={'max-w-md'}>
      {alerts.length > 0 && (
        <div className="mb-4 flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDismissAll}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleViewAll}
            className="text-muted-foreground hover:text-foreground"
          >
            View All
          </Button>
        </div>
      )}

      <div className="space-y-2">
        {alerts.map(alert => (
          <AlertItem key={alert.id} alert={alert} onDismiss={handleDismiss} />
        ))}
      </div>

      {alerts.length === 0 && (
        <div className="py-8 text-center text-muted-foreground">
          No active alerts
        </div>
      )}
    </div>
  );
};

export default AlertList;
