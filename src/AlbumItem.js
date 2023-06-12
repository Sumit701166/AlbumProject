import React, { useState } from 'react';
import UpdateAlbumForm from './UpdateAlbumForm';
import DeleteAlbumButton from './DeleteAlbumButton';

const AlbumItem = ({ album, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedAlbum) => {
    setIsEditing(false);
    onUpdate(album.id, updatedAlbum);
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <h3>{album.title}</h3>
          <p>UserID: {album.userId}</p>
          <p>ID: {album.id}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <DeleteAlbumButton albumId={album.id} onDelete={onDelete} />
        </div>
      ) : (
        <UpdateAlbumForm
          album={album}
          onUpdate={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default AlbumItem;
