import React from 'react';

interface BasicItemProps {
  item: {
    text: string;
    secondaryText?: string;
    icon: React.ReactNode;
  };
  onClick?: () => void;
}

const BasicListItem: React.FC<BasicItemProps> = ({ item, onClick }) => {
  return (
    <div
      className={`flex cursor-pointer items-center rounded-xl px-4 py-2 transition-colors hover:bg-muted`}
      onClick={onClick}
    >
      {item.icon && (
        <div className="mr-3 text-muted-foreground">{item.icon}</div>
      )}
      <div className="flex flex-col">
        <span className="text-md text-foreground">{item.text}</span>
        {item.secondaryText && (
          <span className="text-sm text-muted-foreground">
            {item.secondaryText}
          </span>
        )}
      </div>
    </div>
  );
};

export default BasicListItem;
