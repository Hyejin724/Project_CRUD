import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

let alertTimeout = null;

function App() {
  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const onEditItem = (id, itemName, cost) => {
    setItems(items.map((item) => item.id === id ? { ...item, name : itemName, cost } : item));
  };

  const startEditingItem = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setEditingItem(itemToEdit); // 편집할 항목을 상태로 설정합니다.
      displayAlert('편집할 항목을 선택했습니다.');
    }
  };

  const displayAlert = (message) => {
    setAlert(message);
    setShowAlert(true);
    if(alertTimeout) {
      clearTimeout(alertTimeout);
    }
    alertTimeout = setTimeout(() => {
      setShowAlert(false);
      setAlert('');
      console.log('Alert is now hidden')
      alertTimeout = null; // 타이머를 정리
    }, 5000);
  };

    const addNewItem = (name, cost) => {
    const newItem = { id: Date.now(), name, cost };
    setItems([...items, newItem]);
    displayAlert('항목이 추가되었습니다.');
  };
  
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    displayAlert('항목이 삭제되었습니다.');
  };

  const applyEditItem = (id, itemName, cost) => {
    onEditItem(id, itemName, cost);
    displayAlert('항목이 수정되었습니다.');
  };

  const clearAllItems = () => {
    setItems([]); // items 상태를 빈 배열로 설정하여 모든 항목을 삭제
    displayAlert('모든 항목이 삭제되었습니다.'); // 알림 표시
  };

  return (
    <div className="App">
      {showAlert && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">알림:</strong>
        <span className="block sm:inline">{alert}</span>
      </div>}
        <div className="max-w-sm mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">예산 계산하기</h1>
        <Form className="bg-white"
        onAddItem={addNewItem} editingItem={editingItem} setEditingItem={setEditingItem} onEditItem={applyEditItem} />
        {items.map((item) => (
        <List key={item.id} item={item} onRemoveItem={removeItem} onEditItem={startEditingItem} />
  ))}   <button onClick={clearAllItems}  className="bg-red-500 text-white px-4 py-2 rounded mt-4">
        모두 지우기</button>
        <div className="mt-4 font-bold">
          총 지출: {items.reduce((acc, curr) => acc + curr.cost, 0).toLocaleString()}원
        </div>
      </div>
    </div>
  );
}

export default App;
