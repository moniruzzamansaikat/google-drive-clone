import React from 'react';
import { Folder } from '@mui/icons-material';
import { styled } from '@mui/system';

const FolderIconWrapper = styled('div')({
  margin: '10px',
  padding: '2px 10px',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #a3a3a3',
  borderRadius: '5px',
  userSelect: 'none',

  '.icon': {
    fontSize: '2.3rem',
    color: '#5F6368',
    marginRight: '10px',
  },

  span: {
    fontSize: '14px',
    fontWeight: '600',
  },
});

function FolderIcon() {
  const handleRightClick = (e) => {
    e.preventDefault();
    alert('ok');
  };

  return (
    <FolderIconWrapper onContextMenu={handleRightClick}>
      <Folder className="icon" />
      <span>Python Tutorial</span>
    </FolderIconWrapper>
  );
}

export default FolderIcon;
