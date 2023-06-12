import React from 'react';

import './styles.css';

const AlbumList = ({ albums, onDelete, onUpdate }) => {
  return (
    <div className="container">
      <h2>Albums List</h2>
      {albums.map(album => (
        <div className="album-item" key={album.id}>
          <div>
            <h3 className="album-title">{album.title}</h3>
            <p className="album-id">ID: {album.id}</p>
          </div>
          <div>
            <button className="edit-button" onClick={() => onUpdate(album.id)}>Edit</button>
            <button className="delete-button" onClick={() => onDelete(album.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
