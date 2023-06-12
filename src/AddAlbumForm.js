import React, { useState } from 'react';
import './styles.css';

const AddAlbumForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, userId });
    setTitle('');
    setUserId('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Add Album</h2>
      <div>
        <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      /></div>
      <div>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="input-field"
      /></div></div>
      <button type="submit" className="add-button">Add</button>
    </form>
  );
};

export default AddAlbumForm;
