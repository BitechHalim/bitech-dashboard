// Component for the Push Notifications section
import useNotificationPermission from '@/hooks/use-notificationPermission';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BellRing, Check } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Notification,
  NotificationCardProps,
} from '@/components/lists/Notifications/Notification.types';

const PushNotificationsSection = () => {
  const { notificationsEnabled, toggleNotifications } =
    useNotificationPermission();

  return (
    <Card className="mb-5">
      <CardContent className="flex items-center p-4">
        <BellRing className="me-4 h-6 w-6" />
        <div className="flex-1">
          <p className="mb-1 font-medium text-zinc-950 dark:text-white">
            Push Notifications
          </p>
          <p className="font-medium text-zinc-500 dark:text-zinc-400">
            Send notifications to device.
          </p>
        </div>
        <Switch
          className="ms-auto"
          checked={notificationsEnabled}
          onCheckedChange={toggleNotifications}
        />
      </CardContent>
    </Card>
  );
};

// Component for rendering individual notifications
const NotificationItem = ({
  notification,
  isMarkedAsRead,
}: {
  notification: Notification;
  isMarkedAsRead: boolean;
}) => {
  return (
    <div className="flex">
      {!isMarkedAsRead && (
        <div className="me-4 mt-1 h-2 w-2 rounded-full bg-blue-500" />
      )}
      <div>
        <p className="mb-1 font-medium text-zinc-950 dark:text-white">
          {notification.title}
        </p>
        <p className="font-medium text-zinc-500 dark:text-zinc-400">
          {notification.timestamp}
        </p>
      </div>
    </div>
  );
};

// Main NotificationCard component
const NotificationCard = ({ notifications }: NotificationCardProps) => {
  const [isMarkedAsRead, setIsMarkedAsRead] = useState(false);

  const handleMarkAsRead = () => {
    setIsMarkedAsRead(true);
  };

  return (
    <Card className="w-full max-w-[520px] px-6 pb-6 pt-8">
      <CardHeader className="p-0 pb-4">
        <h2 className="text-xl font-extrabold text-zinc-950 dark:text-white md:text-3xl">
          Notifications
        </h2>
        <p className="mb-5 mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-4 md:text-base">
          You have {isMarkedAsRead ? 0 : notifications.length} unread messages.
        </p>
      </CardHeader>

      <CardContent className="p-0">
        <PushNotificationsSection />

        <div className="mb-6 space-y-6">
          {notifications.map(notification => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              isMarkedAsRead={isMarkedAsRead}
            />
          ))}
        </div>

        <Button
          className="w-full"
          size="lg"
          onClick={handleMarkAsRead}
          disabled={isMarkedAsRead}
        >
          <Check className="me-2 h-6 w-6" />
          {isMarkedAsRead ? 'All Read' : 'Mark all as read'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
