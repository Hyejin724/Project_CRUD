import List from './List'; // Adjust the path if it's different


function Lists({ items,onRemoveItem, onEditItem }) {
  return (
    <div>
      {items.map((item) => (
        <List key={item.id} item={item} onRemoveItem={onRemoveItem} onEditItem={onEditItem} />
      ))}
    </div>
  );
}
export default Lists;
