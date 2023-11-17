function List({ item, onRemoveItem, onEditItem }) {

    const { name, cost } = item;

    return (
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700">{name}</span>
        <span className="font-bold">{cost.toLocaleString()}원</span>
        <button
        onClick={() => onEditItem(item.id)}
        className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
      >
        수정
      </button>
      <button
        onClick={() => onRemoveItem(item.id)}
        className="text-sm bg-red-500 text-white px-2 py-1 rounded"
      >
        삭제
      </button>
      </div>
    );
  }
  export default List;
