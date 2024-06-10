import  { useState } from "react";

import "../styles/floating.scss"

const Floating: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActions = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`action ${isActive ? "active" : ""}`}
      onClick={toggleActions}
      style={{ zIndex: 4000 }} // Agrega el zIndex aquí
    >
     <span> <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="white"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg></span>
      <ul>
        <li>
          <a href="#" className="fb-icon"><i className="fa fa-facebook"></i></a>
          Share on Facebook
        </li>
        <li>
          <a href="#" className="tw-icon"><i className="fa fa-twitter"></i></a>
          Share on Twitter
        </li>
      
      </ul>
    </div>
  );
};

export default Floating;
