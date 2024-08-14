
import React from 'react';

interface ModelImgProps {
  image: string;
  onClose: () => void;
}

const ModelImg: React.FC<ModelImgProps> = ({ image, onClose }) => {
  return (
    <div>
      <img src={image} alt="Selected" />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModelImg;
