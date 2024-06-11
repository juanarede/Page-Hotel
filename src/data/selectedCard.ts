import ImgColombo1 from '../assets/img/roomsDetails/colombo1.webp';


import ImgAmadeus1 from '../assets/img/roomsDetails/amadeus1.webp';


import ImgEstandar1 from '../assets/img/roomsDetails/Standard1.webp';


import ImgSuperior1 from '../assets/img/roomsDetails/superior1.webp';


import ImgEjecutiva1 from '../assets/img/roomsDetails/Ejecutiva1.webp';


import ImgJunior1 from '../assets/img/roomsDetails/Junior-1.webp';


import ImgHoney1 from '../assets/img/roomsDetails/honey1.webp';


import ImgDiplomatica1 from '../assets/img/roomsDetails/diplomatica1.webp';



import ImgDiscapacitados1 from '../assets/img/roomsDetails/Discapacitados1.webp';




export interface CardSelected {
    id: string;
    imgSrc1: string;
    title: string;
}

export const selectedCard: CardSelected[] = [
    {
        id: "1",
        imgSrc1: ImgColombo1,

        title: "SUITE COLOMBO",

    },
    {
        id: "2",
        imgSrc1: ImgAmadeus1,
        title: "HABITACION AMADEUS",

    },
    {
        id: "3",
        imgSrc1: ImgEstandar1,
        title: "HABITACIONES ESTANDAR",

    },
    {
        id: "4",
        imgSrc1: ImgSuperior1,
        title: "HABITACIONES SUPERIOR",

    },

    {
        id: "5",
        imgSrc1: ImgEjecutiva1,
        title: "HABITACIONES EJECUTIVAS",

    },
    {
        id: "6",
        imgSrc1: ImgJunior1,
        title: "SUITE JUNIOR",

    },
    {
        id: "7",
        imgSrc1: ImgHoney1,
        title: "HONEYMOON SUITE",

    },
    {
        id: "8",
        imgSrc1: ImgDiplomatica1,
        title: "SUITE DIPLOMÁTICA",

    },
    {
        id: "9",
        imgSrc1: ImgDiscapacitados1,
        title: "ADA HABITACIONES PARA DISCAPACITADOS",
    },
];
