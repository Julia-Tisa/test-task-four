import React from 'react';

export function Banners() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Баннеры</div>
      <div style={{ color: 'gray', fontSize: '14px', marginLeft: '10px' }}>Home / Основные /</div>
      <div style={{ color: 'black', fontSize: '14px', marginLeft: '5px' }}>Баннеры</div>
    </div>
  );
}

export default Banners;
