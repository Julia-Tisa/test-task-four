import React, { useRef } from 'react';
import { Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { importFile, deleteAll } from '../../../../../store/slices/schedulerSlice';

function ButtonContainer() {
  const component = useSelector((store) => store.scheduler);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const exportPlan = () => {
    if (component.length) {
      const fileData = JSON.stringify(component);
      const blob = new Blob([fileData], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'placement-plan.json';
      link.href = url;
      link.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (ev) => {
      dispatch(importFile(JSON.parse(ev.target.result)));
    };
    reader.readAsText(file);
  };

  const handleClear = () => {
    dispatch(deleteAll());
  };

  return (
    <Card style={{ margin: 0 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          type="primary"
          size="large"
          onClick={exportPlan}
          style={{ flexGrow: 1 }}
        >
          Экспорт
        </Button>
        <input
          type="file"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <Button
          type="primary"
          size="large"
          onClick={() => fileInputRef.current.click()}
          style={{ flexGrow: 1 }}
        >
          Импорт
        </Button>
        <Button
          danger
          type="primary"
          size="large"
          onClick={handleClear}
          style={{ flexGrow: 1 }}
        >
          Сброс
        </Button>
      </div>
    </Card>
  );
}

export default ButtonContainer;
