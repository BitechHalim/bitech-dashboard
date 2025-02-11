'use client';
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';

interface SwitchListItemProps {
  item: {
    text: string;
    icon: React.ReactNode;
  };
  onSelect?: (selected: boolean) => void;
}

const SwitchListItem: React.FC<SwitchListItemProps> = ({ item, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsSelected(checked);
    onSelect?.(checked);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    handleToggle(!isSelected);
  };

  return (
    <div
      className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-2 transition-colors hover:bg-muted ${
        isSelected ? 'bg-muted/50' : ''
      } `}
      onClick={handleClick}
    >
      <div className="flex items-center">
        {item.icon && (
          <div className="mr-3 text-muted-foreground">{item.icon}</div>
        )}
        <span className="text-md text-foreground">{item.text}</span>
      </div>
      <Switch checked={isSelected} onCheckedChange={handleToggle} />
    </div>
  );
};

export default SwitchListItem;
