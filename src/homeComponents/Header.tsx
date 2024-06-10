import React, { useState, useEffect } from 'react';
import HeaderBg1 from '../assets/img/header-bg.webp';
import HeaderBg2 from '../assets/img/Entrada.webp';
import Floating from './Floating';
import CheckIn from './CheckIn';

const Header: React.FC = () => {
  const images = [HeaderBg1, HeaderBg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 7000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    <div className="relative h-[636px] overflow-hidden">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full transition-opacity duration-1000 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-fixed bg-black/60">
          <div className="flex items-center justify-center h-full">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 text-5xl font-bold">Lorem ipsu</h1>
              <h3 className="mb-8 text-3xl font-bold">Lorem ipsu</h3>
              <button
                type="button"
                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute left-0 right-0 w-full overflow-hidden bottom-[-0.1rem] sm:bottom-[-7rem] md:bottom-[-8rem] lg:bottom-[-2rem] xl:bottom-[-6rem]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
    <path fill="#f3f4f5" fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,154.7C672,139,768,117,864,128C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
</div> */}
  

    </div>
 {/* <CheckIn/> */}

 </>
  );
};

export default Header;
