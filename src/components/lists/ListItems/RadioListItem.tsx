'use client';
import React from 'react';

interface RadioListItemProps {
  item: {
    id: number;
    text: string;
    icon: React.ReactNode;
  };
  isSelected: boolean;
  onSelect: (selected: boolean) => void;
}

const RadioListItem: React.FC<RadioListItemProps> = ({
  item,
  isSelected,
  onSelect,
}) => {
  const handleToggle = () => {
    onSelect(true);
  };

  return (
    <div
      className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-2 transition-colors hover:bg-muted ${isSelected ? 'bg-muted/50' : ''} `}
      onClick={handleToggle}
    >
      <div className="flex items-center">
        {item.icon && (
          <div className="mr-3 text-muted-foreground">{item.icon}</div>
        )}
        <span className="text-md text-foreground">{item.text}</span>
      </div>
    </div>
  );
};

export default RadioListItem;
