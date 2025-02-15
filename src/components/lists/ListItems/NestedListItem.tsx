import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export interface NestedItem {
  id: number;
  text: string;
  icon?: React.ReactNode;
  children?: NestedItem[];
}

interface NestedListItemProps {
  item: NestedItem;
  level?: number;
  onItemClick?: (item: NestedItem) => void;
}

const NestedListItem: React.FC<NestedListItemProps> = ({
  item,
  level = 0,
  onItemClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleClick = () => {
    onItemClick?.(item);
  };

  return (
    <li
      style={{
        listStyleType: 'none',
        padding: 4,
        paddingLeft: `${level * 16}px`,
      }}
    >
      <div
        className={`flex cursor-pointer items-center rounded-xl px-4 py-2 transition-colors hover:bg-muted`}
        onClick={handleClick}
      >
        {hasChildren && (
          <div
            style={{ marginRight: '0.5rem', color: 'var(--muted-foreground)' }}
            onClick={toggleExpand}
          >
            {isExpanded ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </div>
        )}

        {item.icon && (
          <div
            style={{ marginRight: '0.75rem', color: 'var(--muted-foreground)' }}
          >
            {item.icon}
          </div>
        )}

        <span style={{ fontSize: '1rem', color: 'var(--foreground)' }}>
          {item.text}
        </span>
      </div>

      {hasChildren && isExpanded && (
        <ul>
          {item.children?.map(childItem => (
            <NestedListItem
              key={childItem.id}
              item={childItem}
              level={level + 1}
              onItemClick={onItemClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
export default NestedListItem;
