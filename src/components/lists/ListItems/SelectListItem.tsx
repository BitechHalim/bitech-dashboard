'use client';
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface SelectListItemProps {
  item: {
    text: string;
    icon: React.ReactNode;
  };
  onSelect?: (selected: boolean) => void;
  isSelected?: boolean;
}

const SelectListItem: React.FC<SelectListItemProps> = ({
  item,
  onSelect,
  isSelected,
}) => {
  // const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    const newSelectedState = !isSelected;
    // setIsSelected(newSelectedState);
    onSelect?.(newSelectedState);
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
      <Checkbox
        onSelect={handleToggle}
        checked={isSelected}
        className={'form-checkbox h-5 w-5 text-primary'}
      />
    </div>
  );
};

export default SelectListItem;
