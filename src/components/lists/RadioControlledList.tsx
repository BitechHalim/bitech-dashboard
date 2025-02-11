'use client';
import React, { useEffect, useState } from 'react';

interface RadioControlledListProps<T extends { id: number }> {
  data: T[];
  ListItem: React.ComponentType<{
    item: T;
    isSelected: boolean;
    onSelect: (selected: boolean) => void;
  }>;
}

const RadioControlledList = <T extends { id: number }>({
  data,
  ListItem,
}: RadioControlledListProps<T>) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemSelect = (item: T) => {
    setSelectedItem(item.id);
  };

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <div className="space-y-2">
      {data.map(item => (
        <ListItem
          key={item.id}
          item={item}
          isSelected={selectedItem === item.id}
          onSelect={() => handleItemSelect(item)}
        />
      ))}
    </div>
  );
};

export default RadioControlledList;
