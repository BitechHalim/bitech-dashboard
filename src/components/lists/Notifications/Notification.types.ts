export interface Notification {
  id: string;
  title: string;
  timestamp: string;
}

export interface NotificationCardProps {
  notifications: Notification[];
}
