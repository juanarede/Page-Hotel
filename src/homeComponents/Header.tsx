import React, { useState, useEffect } from 'react';
import HeaderBg1 from '../assets/img/header-bg.webp';
import HeaderBg2 from '../assets/img/Entrada.webp';

const Header: React.FC = () => {
  const imagesAndTexts = [
    {
      image: HeaderBg1,
      title: 'Bienvenido a Nuestro Hotel',
      subtitle: 'Disfruta de una experiencia única',
    },
    {
      image: HeaderBg2,
      title: 'Reserva Ahora',
      subtitle: 'Habitaciones cómodas y elegantes',
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex === imagesAndTexts.length - 1 ? 0 : prevIndex + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [imagesAndTexts.length]);

  return (
    <div className="relative h-[680px] overflow-hidden">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full transition-opacity bg-center bg-no-repeat bg-cover duration-2000"
        style={{
          backgroundImage: `url(${imagesAndTexts[currentImageIndex].image})`,
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-fixed bg-black/60">
          <div className="flex items-center justify-center h-full">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 text-5xl font-bold">{imagesAndTexts[currentImageIndex].title}</h1>
              <h3 className="mb-8 text-3xl font-bold">{imagesAndTexts[currentImageIndex].subtitle}</h3>
              <button
                type="button"
                className="inline-block bg-[#00acee] rounded-lg px-6 py-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#0099cc] focus:bg-[#0099cc] focus:outline-none focus:ring-0 active:bg-[#007bb5]"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
