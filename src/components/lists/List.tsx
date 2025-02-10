import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface ListProps<T> {
  data: T[];
  ListItem: React.ComponentType<{ item: T }>;
  onMarkAllAsRead?: () => void;
  onAddNewTask?: () => void;
}

const List = <T,>({
  data,
  ListItem,
  onMarkAllAsRead,
  onAddNewTask,
}: ListProps<T>) => {
  return (
    <div className="space-y-4">
      {onMarkAllAsRead && onAddNewTask && (
        <>
          <div className="flex items-center justify-between">
            {/* "Mark All as Read" Button */}
            <Button variant="default" onClick={onMarkAllAsRead}>
              Mark All as Read
            </Button>

            {/* "Add New Task" Button */}
            <Button variant="outline" onClick={onAddNewTask}>
              Add New Task
            </Button>
          </div>

          <Separator />
        </>
      )}

      <div className="space-y-2">
        {data.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
