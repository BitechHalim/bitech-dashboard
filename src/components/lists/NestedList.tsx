import NestedListItem, {
  NestedItem,
} from '@/components/lists/ListItems/NestedListItem';

interface NestedListProps {
  data: NestedItem[];
  onItemClick?: (item: NestedItem) => void;
}

const NestedList: React.FC<NestedListProps> = ({ data, onItemClick }) => {
  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {data.map(item => (
        <NestedListItem key={item.id} item={item} onItemClick={onItemClick} />
      ))}
    </ul>
  );
};

export default NestedList;
