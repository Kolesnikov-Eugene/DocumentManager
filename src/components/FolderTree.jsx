import React, { useState } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';

// Example folder structure
const folderData = [
  {
    id: 1,
    name: 'Folder 1',
    children: [
      { id: 2, name: 'Subfolder 1-1', children: [] },
      {
        id: 3,
        name: 'Subfolder 1-2',
        children: [
          { id: 4, name: 'Subfolder 1-2-1', children: [] },
          { id: 5, name: 'Subfolder 1-2-2', children: [] },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Folder 2',
    children: [
      { id: 7, name: 'Subfolder 2-1', children: [] },
      { id: 8, name: 'Subfolder 2-2', children: [] },
    ],
  },
];

const FolderTree = ({ folders = folderData }) => {
  return (
    <div style={{ padding: '10px' }}>
      <FolderList folders={folders} />
    </div>
  );
};

const FolderList = ({ folders }) => {
  return (
    <ul style={{ listStyle: 'none', paddingLeft: '20px', margin: 0 }}>
      {folders.map((folder) => (
        <FolderItem key={folder.id} folder={folder} />
      ))}
    </ul>
  );
};

const FolderItem = ({ folder }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasChildren = folder.children && folder.children.length > 0;

  return (
    <li>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: hasChildren ? 'pointer' : 'default',
        }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          isExpanded ? (
            <MdKeyboardArrowDown style={{ marginRight: '5px' }} />
          ) : (
            <MdKeyboardArrowRight style={{ marginRight: '5px' }} />
          )
        ) : (
          <span style={{ marginRight: '20px' }} />
        )}
        {isExpanded ? (
          <FaFolderOpen style={{ marginRight: '5px', color: '#ffc107' }} />
        ) : (
          <FaFolder style={{ marginRight: '5px', color: '#6c757d' }} />
        )}
        {folder.name}
      </div>
      {hasChildren && isExpanded && <FolderList folders={folder.children} />}
    </li>
  );
};

export default FolderTree;