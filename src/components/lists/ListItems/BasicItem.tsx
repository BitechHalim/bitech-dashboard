import React from 'react';

interface BasicItemProps {
  item: { text: string; icon: React.ReactNode };
  onClick?: () => void;
}

const BasicItem: React.FC<BasicItemProps> = ({ item, onClick }) => {
  return (
    <div
      className={`flex cursor-pointer items-center rounded-xl px-4 py-2 transition-colors hover:bg-muted`}
      onClick={onClick}
    >
      {item.icon && (
        <div className="mr-3 text-muted-foreground">{item.icon}</div>
      )}
      <span className="text-md text-foreground">{item.text}</span>
    </div>
  );
};

export default BasicItem;
