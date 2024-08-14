import React from 'react';

interface ModelImgProps {
  image: string;
  onClose: () => void;
}

const ModelImg: React.FC<ModelImgProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"    onClick={onClose}>
      <div className="relative" >
        <img src={image} alt="Selected" className="max-w-full max-h-full" />
  
      </div>
    </div>
  );
};

export default ModelImg;
