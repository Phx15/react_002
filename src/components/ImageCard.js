import React, { useState } from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  const [excluded, setExcluded] = useState(false);

  const handleCardClick = () => {
    setExcluded(!excluded);
  };

  return (
    <div className={`${styles.card} ${excluded ? styles.excluded : ''}`} onClick={handleCardClick}>
      <img src={image} alt="" className={styles.image} />
    </div>
  );
};

export default ImageCard;