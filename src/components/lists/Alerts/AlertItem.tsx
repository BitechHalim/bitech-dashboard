import React from 'react';
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
  Terminal,
  X,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type Priority = 'info' | 'warning' | 'error' | 'success';

interface Alert {
  id: string;
  title: string;
  message: string;
  priority: Priority;
  timestamp: Date;
}

interface AlertItemProps {
  alert: Alert;
  onDismiss: (id: string) => void;
}

const AlertItem: React.FC<AlertItemProps> = ({ alert, onDismiss }) => {
  const getPriorityStyles = (priority: Priority) => {
    switch (priority) {
      case 'info':
        return 'bg-accent/10 border-accent';
      case 'warning':
        return 'bg-primary/10 border-primary';
      case 'error':
        return 'bg-destructive/10 border-destructive';
      case 'success':
        return 'bg-success/10 border-success'; // Assuming "success" colors exist in your design system.
      default:
        return 'bg-muted border-muted-foreground';
    }
  };

  const getPriorityIcon = (priority: Priority) => {
    switch (priority) {
      case 'info':
        return <Info className="h-4 w-4 text-accent" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-primary" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case 'success':
        return <CheckCircle className="text-success h-4 w-4" />;
      default:
        return <Terminal className="h-4 w-4" />;
    }
  };

  return (
    <Alert className={`relative mb-4 ${getPriorityStyles(alert.priority)}`}>
      {getPriorityIcon(alert.priority)}
      <AlertTitle className="font-semibold">{alert.title}</AlertTitle>
      <AlertDescription>
        <div className="flex flex-col">
          <p>{alert.message}</p>
          <span className="mt-1 text-sm text-muted-foreground">
            {alert.timestamp.toLocaleTimeString()}
          </span>
        </div>
      </AlertDescription>
      <button
        onClick={() => onDismiss(alert.id)}
        className="absolute right-2 top-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    </Alert>
  );
};

export default AlertItem;
