import React from 'react';
import Toolbar from './components/Toolbar';
import FolderTree from './components/FolderTree';
import GridView from './components/GridView';

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
    <Toolbar />
    <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
      <FolderTree />
      <GridView />
    </div>
  </div>
);

export default App;