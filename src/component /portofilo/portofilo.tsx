import React, { useState } from 'react';

import port1 from '../../component /img/img1.png';
import port2 from '../../component /img/img2.png';
import port3 from '../../component /img/img3.png';

import Black from '../Line/Black';
import ModelImg from '../ModelImg/ModelImg';

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images: string[] = [port1, port2, port3, port1, port2, port3];

  return (
    <>
      <div className="container py-5">
        <h2 className="uppercase text-4xl font-bold text-[#2C3E50] pt-5 text-center">
          Portfolio Component
        </h2>
        <div className="w-1/3 mx-auto">
          <Black />
        </div>

        <div className="py-5 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt="project"
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-90">
                <button className="text-white text-4xl">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage ? (
        <ModelImg image={selectedImage} onClose={() => setSelectedImage(null)} />
      ) : null}
    </>
  );
};

export default Portfolio;
