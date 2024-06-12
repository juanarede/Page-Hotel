import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const location = useLocation();

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-black" : "md:bg-transparent bg-black md:hover:bg-black"
      }`}>
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-5 mx-auto">
        <Link to="/inicio" className="flex items-center">
          <img
            style={{ width: "6rem", marginBottom: "1rem" }}
            src="https://www.hotelcc.com.ar/wp-content/uploads/2013/12/Logo_w.png"
            className="mr-3"
            alt="Logo"
          />
        </Link>
        <div className="flex md:order-2">
          <button
            id="search-toggle"
            type="button"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-gray-900 rounded-lg text-md hover:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            id="navbar-toggle"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuVisible ? "" : "hidden"
            }`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-gray-900 rounded-lg text-md hover:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                to="/inicio"
                onClick={handleLinkClick}
                className={`block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:hover:text-turquoise dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${location.pathname === '/inicio' ? 'text-turquoise border-b-2 border-turquoise' : ''
                  }`}
              >
                <span className={`${location.pathname === '/inicio' ? 'text-turquoise' : ''}`}>
                  Inicio
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/habitaciones"
                onClick={handleLinkClick}
                className={`block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:hover:text-turquoise dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${location.pathname === '/habitaciones' ? 'text-turquoise border-b-2 border-turquoise' : ''
                  }`}
              >
                <span className={`${location.pathname === '/habitaciones' ? 'text-turquoise' : ''}`}>
                  Habitaciones
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/conocenos"
                onClick={handleLinkClick}
                className={`block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:hover:text-turquoise dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${location.pathname === '/conocenos' ? 'text-turquoise border-b-2 border-turquoise' : ''
                  }`}
              >
                <span className={`${location.pathname === '/conocenos' ? 'text-turquoise' : ''}`}>
                  Conocenos
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                onClick={handleLinkClick}
                className={`block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:hover:text-turquoise dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${location.pathname === '/galeria' ? 'text-turquoise border-b-2 border-turquoise' : ''
                  }`}
              >
                <span className={`${location.pathname === '/galeria' ? 'text-turquoise' : ''}`}>
                  Galería de Fotos
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
