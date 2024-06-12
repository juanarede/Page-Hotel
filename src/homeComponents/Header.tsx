
import { useState, useEffect } from 'react';
import HeaderBg1 from '../assets/img/header-bg.webp';
import HeaderBg2 from '../assets/img/Entrada.webp';
import "../styles/header.scss"

const Header = () => {
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
  }, [currentImageIndex, imagesAndTexts]);

  return (
    <div className="header-carousel">
      {imagesAndTexts.map((item, index) => (
        <div
          key={index}
          className={`header-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="header-overlay">
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
      ))}
    </div>
  );
};

export default Header;
