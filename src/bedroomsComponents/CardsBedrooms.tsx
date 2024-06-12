import Room1 from '../assets/img/rooms/room1.webp';
import Room2 from '../assets/img/rooms/room2.webp';
import Room3 from '../assets/img/rooms/room3.webp';
import Room4 from '../assets/img/rooms/room4.webp';
import Room5 from '../assets/img/rooms/room5.webp';
import Room6 from '../assets/img/rooms/room6.webp';
import Room7 from '../assets/img/rooms/room7.webp';
import Room8 from '../assets/img/rooms/room8.webp';
import Room9 from '../assets/img/rooms/room9.webp';
import { Link } from 'react-router-dom';

const cardData = [
    {
        id: 1,
        imgSrc: Room1,
        title: "SUITE COLOMBO",
        description: "Disponemos de una suite de este tipo que cuenta con…",
        label: "Ver",
    },
    {
        id: 2,
        imgSrc: Room2,
        title: "HABITACION AMADEUS",
        description: "Esta Suite única cuenta con vista a las estrellas. Es…",
        label: "ver",
    },
    {
        id: 3,
        imgSrc: Room3,
        title: "HABITACIONES ESTANDAR",
        description: "Habitaciones de dos ambientes con un dormitorio con cama matrimonial…",
        label: "ver",
    },
    {
        id: 4,
        imgSrc: Room4,
        title: "HABITACIONES SUPERIOR",
        description: "Amplias habitaciones con un dormitorio con cama matrimonial o dos…",
        label: "ver",
    },
    {
        id: 5,
        imgSrc: Room5,
        title: "HABITACIONES EJECUTIVAS",
        description: "Habitaciones de un ambiente con un dormitorio con cama matrimonial,…",
        label: "ver",
    },
    {
        id: 6,
        imgSrc: Room6,
        title: "SUITE JUNIOR",
        description: "Estas suites tienen tres ambientes, entre los que se encuentran…",
        label: "ver",
    },
    {
        id: 7,
        imgSrc: Room7,
        title: "HONEYMOON SUITE",
        description: "Esta suite cuenta con una cálida ambientación y moderna decoración,…",
        label: "ver",
    },
    {
        id: 8,
        imgSrc: Room8,
        title: "SUITE DIPLOMÁTICA",
        description: "Suites de tres ambientes, entre los que se encuentran un…",
        label: "ver",
    },
    {
        id: 9,
        imgSrc: Room9,
        title: "ADA HABITACIONES PARA DISCAPACITADOS",
        description: "Única habitación adaptada para huéspedes con movilidad reducida. La misma…",
        label: "ver",
    },
  
];

const CardsBedrooms: React.FC = () => {
    return (
        <div className="max-w-screen-xl p-5 mx-auto sm:p-10 md:p-16">
            <div className="flex justify-between mb-5 text-sm border-b">
            <div className="flex items-center pb-2 pr-2 text-blue-500 uppercase border-b-2 border-blue-500">
    <a href="#" className="inline-block font-semibold">Habitaciones</a>
</div>


            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
                {cardData.map((card) => (
                    <div key={card.id} className="flex flex-col overflow-hidden rounded shadow-lg">
                        <a href="#"></a>
                        <div className="relative">
                            <Link to={`/habitacion/${card.id}`}>
                                <img className="w-full" src={card.imgSrc} alt={card.title} />
                                <div className="absolute top-0 bottom-0 left-0 right-0 transition duration-300 bg-gray-900 opacity-25 hover:bg-transparent"></div>
                            </Link>
                            <Link to={`/habitacion/${card.id}`}>
                                <div className="absolute top-0 right-0 px-4 py-2 mt-3 mr-3 bg-[#00acee] rounded-lg px-6 py-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#0099cc] focus:bg-[#0099cc] focus:outline-none focus:ring-0 active:bg-[#007bb5]">
                                    {card.label}
                                </div>
                            </Link>
                        </div>
                        <div className="px-6 py-4 mb-auto">
                            <a href="#" className="inline-block mb-2 text-lg font-medium transition duration-500 ease-in-out hover:text-indigo-600">
                                {card.title}
                            </a>
                            <p className="text-sm text-gray-500">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardsBedrooms;
