import React from 'react';

const GridView = () => (
  <div style={{ flex: 1, background: '#fff', padding: '10px' }}>
    <h2>Grid View</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      <div style={{ background: '#ddd', height: '100px' }}>Item 1</div>
      <div style={{ background: '#ddd', height: '100px' }}>Item 2</div>
      <div style={{ background: '#ddd', height: '100px' }}>Item 3</div>
    </div>
  </div>
);

export default GridView;