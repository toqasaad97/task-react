import React from 'react';
import img from '../../component /img/avataaars.svg'
import White from '../Line/White';


const Home: React.FC = () => {
  return (
    <div className="bg-[#1ABC9C] h-[70vh] flex justify-center items-center">
      <div className="grid grid-cols-1 place-items-center">
        <div>
          <img
            src={img}
            alt="avataars"
            className="h-[250px] w-[250px] rounded-full"
          />
        </div>
        <div className="mb-10">
          <h2 className="uppercase text-3xl font-bold text-white py-5">start Framework</h2>
          <White />
          <span className="text-white">Graphic Artist - Web Designer - Illustrator</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
