import { styled } from '@mui/system';
import React from 'react';
import FolderIcon from './FolderIcon';

const FoldersWrapper = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
});

function Folders() {
  return (
    <FoldersWrapper>
      <FolderIcon />
      <FolderIcon />
      <FolderIcon />
    </FoldersWrapper>
  );
}

export default Folders;
