import React from 'react';
import { Button } from '@/components/ui/button';
import { BellRing } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { NotificationCardProps } from '@/components/lists/Notifications/Notification.types';
import NotificationCard from '@/components/lists/Notifications/NotificationCard';

const NotificationPopover = ({ notifications }: NotificationCardProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <BellRing className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0">
        <NotificationCard notifications={notifications} />
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
