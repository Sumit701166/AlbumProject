import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AlbumList from './AlbumList';
import AddAlbumForm from './AddAlbumForm';

const API_URL = 'https://jsonplaceholder.typicode.com/albums';

const App = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(API_URL);
      setAlbums(response.data);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const addAlbum = async (newAlbum) => {
    try {
      const response = await axios.post(API_URL, newAlbum);
      setAlbums([...albums, response.data]);
    } catch (error) {
      console.error('Error adding album:', error);
    }
  };

  const updateAlbum = async (albumId, updatedAlbum) => {
    try {
      const response = await axios.put(`${API_URL}/${albumId}`, updatedAlbum);
      const updatedAlbums = albums.map((album) =>
        album.id === albumId ? response.data : album
      );
      setAlbums(updatedAlbums);
    } catch (error) {
      console.error('Error updating album:', error);
    }
  };

  const deleteAlbum = async (albumId) => {
    try {
      await axios.delete(`${API_URL}/${albumId}`);
      const updatedAlbums = albums.filter((album) => album.id !== albumId);
      setAlbums(updatedAlbums);
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };

  return (
    <div>
      <div className='Album-Mange'>
      <h1><center>Album Management</center></h1>
      </div>
      <AddAlbumForm onAdd={addAlbum} />
      <AlbumList
        albums={albums}
        onDelete={deleteAlbum}
        onUpdate={updateAlbum}
      />
    </div>
  );
};

export default App;