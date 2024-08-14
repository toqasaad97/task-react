import React from 'react';
import White from '../Line/White';


const About: React.FC = () => {
  return (
    <>
      <div className="bg-[#1ABC9C] h-[70vh] flex justify-center items-center">
        <div className="container flex justify-center items-center">
          <div>
            <h2 className="uppercase text-4xl font-bold text-white pt-5 text-center">
              About Component
            </h2>
            <div className="w-[30%] mx-auto">
              <White />
            </div>
            <div className="grid place-items-center min-h-[100px]">
              <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-2 w-[80%]">
                <p>
                  Freelancer is a free Bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
                <p>
                  Freelancer is a free Bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
