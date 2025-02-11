'use client';
import React, { useEffect, useState } from 'react';

interface ControlledListProps<T extends { id: number }> {
  data: T[];
  ListItem: React.ComponentType<{
    item: T;
    onSelect: (selected: boolean) => void;
    isSelected: boolean;
  }>;
}

const ControlledList = <T extends { id: number }>({
  data,
  ListItem,
}: ControlledListProps<T>) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleItemSelect = (item: T, selected: boolean) => {
    setSelectedItems(prev =>
      selected ? [...prev, item.id] : prev.filter(id => id !== item.id),
    );
  };

  // Debugging
  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  return (
    <div className="space-y-2">
      {data.map(item => (
        <ListItem
          key={item.id}
          item={item}
          isSelected={selectedItems.includes(item.id)}
          onSelect={selected => handleItemSelect(item, selected)}
        />
      ))}
    </div>
  );
};

export default ControlledList;
