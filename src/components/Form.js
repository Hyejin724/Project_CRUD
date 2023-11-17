import React, { useState, useEffect } from 'react';


function Form({ onAddItem, editingItem, setEditingItem, onEditItem }) {
  const [cost, setCost] = useState('');
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    if (editingItem) {
      setItemName(editingItem.name);
      setCost(editingItem.cost.toString());
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName || !cost) return;

    if (editingItem) {
      // 편집 로직을 처리합니다.
      onEditItem(editingItem.id, itemName, parseFloat(cost));
      setEditingItem(null);
    } else {
      // 새 항목 추가 로직을 처리합니다.
      onAddItem(itemName, parseFloat(cost));
    }
    setItemName('');
    setCost('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="지출 항목"
        className="border p-2 mr-2"
      />
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="비용"
        className="border p-2"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">
        제출
      </button>
    </form>
  );
}
export default Form;
