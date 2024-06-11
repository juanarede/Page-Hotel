import React from 'react';
import HeaderBedroom from '../assets/img/header-bedroom.webp';

const Header: React.FC = () => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full transition-opacity duration-1000 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${HeaderBedroom})`,
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-fixed bg-black/60">
          <div className="flex items-center justify-center h-full">
            <div className="px-6 text-center text-white md:px-12">
              <h3 className="mb-8 text-3xl font-bold">Habitaciones y Suites Exclusivas</h3>
              {/* <p className="text-lg">LORem IPSU</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
