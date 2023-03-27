import React, { useState } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';

const App = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleImageOnePieceV1 = () => {
    
    const imageFiles = require.context('./OnePiece', true, /\.(jpg|png|svg)$/);
    const onePieceImages = imageFiles.keys().map((key) => imageFiles(key));
    const newImages = onePieceImages.filter((image) => !images.includes(image));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <div className="App">
      <button onClick={handleImageOnePieceV1}>One Piece v1</button>
      <div className="upload-container">
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
      </div>
      <div className="grid-container">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
        {images.length === 0 && <div>No images to display</div>}
      </div>
    </div>
  );
};

export default App;