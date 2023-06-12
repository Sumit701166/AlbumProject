import React, { useState } from 'react';
import './styles.css';

const UpdateAlbumForm = ({ album, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(album.title);
  const [userId, setUserId] = useState(album.userId);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ title, userId });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3>Update Album</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="update-button">Update</button>
      <button onClick={onCancel} className="cancel-button">Cancel</button>
    </form>
  );
};

export default UpdateAlbumForm;
