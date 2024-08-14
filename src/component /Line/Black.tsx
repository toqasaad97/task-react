import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Black: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-3 my-5">
      <div className="w-[30%] h-1 bg-[#2C3E50] mx-2"></div>
      <FontAwesomeIcon icon={faStar} className="text-[#2C3E50] w-8 h-8" />
      <div className="w-[30%] h-1 bg-[#2C3E50] mx-2"></div>
    </div>
  );
};

export default Black;
