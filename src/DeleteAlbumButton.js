import React from 'react';
import './styles.css';

const DeleteAlbumButton = ({ albumId, onDelete }) => {
  const handleDelete = () => {
    onDelete(albumId);
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
};

export default DeleteAlbumButton;
