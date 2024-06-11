import ImgColombo1 from '../assets/img/roomsDetails/colombo1.webp';
import ImgColombo2 from '../assets/img/roomsDetails/colombo2.webp';
import ImgColombo3 from '../assets/img/roomsDetails/colombo3.webp';


import ImgAmadeus1 from '../assets/img/roomsDetails/amadeus1.webp';
import ImgAmadeus2 from '../assets/img/roomsDetails/amadeus2.webp';
import ImgAmadeus3 from '../assets/img/roomsDetails/amadeus3.webp';
import ImgAmadeus4 from '../assets/img/roomsDetails/amadeus4.webp';

import ImgEstandar1 from '../assets/img/roomsDetails/Standard1.webp';
import ImgEstandar2 from '../assets/img/roomsDetails/Standard2.webp';
import ImgEstandar3 from '../assets/img/roomsDetails/Standard3.webp';

import ImgSuperior1 from '../assets/img/roomsDetails/superior1.webp';
import ImgSuperior2 from '../assets/img/roomsDetails/superior2.webp';
import ImgSuperior3 from '../assets/img/roomsDetails/superior3.webp';


import ImgEjecutiva1 from '../assets/img/roomsDetails/Ejecutiva1.webp';
import ImgEjecutiva2 from '../assets/img/roomsDetails/Ejecutiva2.webp';
import ImgEjecutiva3 from '../assets/img/roomsDetails/Ejecutiva3.webp';
import ImgEjecutiva4 from '../assets/img/roomsDetails/Ejecutiva4.webp';


import ImgJunior1 from '../assets/img/roomsDetails/Junior-1.webp';
import ImgJunior2 from '../assets/img/roomsDetails/Junior-2.webp';
import ImgJunior3 from '../assets/img/roomsDetails/Junior-3.webp';
import ImgJunior4 from '../assets/img/roomsDetails/Junior-4.webp';

import ImgHoney1 from '../assets/img/roomsDetails/honey1.webp';
import ImgHoney2 from '../assets/img/roomsDetails/honey2.webp';
import ImgHoney3 from '../assets/img/roomsDetails/honey3.webp';
import ImgHoney4 from '../assets/img/roomsDetails/honey4.webp';

import ImgDiplomatica1 from '../assets/img/roomsDetails/diplomatica1.webp';
import ImgDiplomatica2 from '../assets/img/roomsDetails/diplomatica2.webp';
import ImgDiplomatica3 from '../assets/img/roomsDetails/diplomatica3.webp';
import ImgDiplomatica4 from '../assets/img/roomsDetails/diplomatica4.webp';


import ImgDiscapacitados1 from '../assets/img/roomsDetails/Discapacitados1.webp';
import ImgDiscapacitados2 from '../assets/img/roomsDetails/Discapacitados2.webp';
import ImgDiscapacitados3 from '../assets/img/roomsDetails/Discapacitados3.webp';
import ImgDiscapacitados4 from '../assets/img/roomsDetails/Discapacitados4.webp';



export interface Card {
    id: string;
    imgSrc1: string;
    imgSrc2: string;
    imgSrc3: string;
    imgSrc4: string;
    title: string;
    description: string;
    subdescription: string;
    category: string;

}

export const cardData: Card[] = [
    {
        id: "1",
        imgSrc1: ImgColombo1,
        imgSrc2: ImgColombo2,
        imgSrc3: ImgColombo3,
        imgSrc4: 'null',
        title: "SUITE COLOMBO",
        description: "Disponemos de una suite de este tipo que cuenta con tres dormitorios: uno matrimonial, uno con dos camas de una plaza y uno con una cama de una plaza, tres baños, amplio living comedor con sofá cama extensible, cocina y balcón.",
        subdescription: "",
        category: "Suite",
    },
    {
        id: "2",
        imgSrc1: ImgAmadeus1,
        imgSrc2: ImgAmadeus2,
        imgSrc3: ImgAmadeus3,
        imgSrc4: ImgAmadeus4,
        title: "HABITACION AMADEUS",
        description: "Esta Suite única cuenta con vista a las estrellas. Es un concepto innovador en Argentina donde armonizan el confort y la privacidad. Es un lugar soñado donde se fusiona intimidad, placer y servicios. Màs de 100mt2, jacuzzi, solárium, equipo de audio y tv, ducha al aire libre, baño, living, cascada, frigobar, telescopio. Ubicada en el piso 17. Incluye una habitación adicional. Por eventos consultar al (011)4778-4900 int 2261",
        subdescription: "",
        category: "Habitación",
    },
    {
        id: "3",
        imgSrc1: ImgEstandar1,
        imgSrc2: ImgEstandar2,
        imgSrc3: ImgEstandar3,
        imgSrc4: "null",
        title: "HABITACIONES ESTANDAR",
        description: "Habitaciones de dos ambientes con un dormitorio con cama matrimonial o con dos camas de una plaza, un amplio living comedor. La dimensión aproximada de esta suite es de 30 mts2. Contamos con habitación para personas con movilidad reducida.",
        subdescription: "Base single o doble únicamente.",
        category: "Habitación",
    },
    {
        id: "4",
        imgSrc1: ImgSuperior1,
        imgSrc2: ImgSuperior2,
        imgSrc3: ImgSuperior3,
        imgSrc4: "null",
        title: "HABITACIONES SUPERIOR",
        description: "Amplias habitaciones con un dormitorio con cama matrimonial o dos camas de una plaza, confortable living comedor con sofá cama extensible. Algunos departamentos de este tipo cuentan con balcón terraza y la dimensión aproximada es de 40 m2.",
        subdescription: "Base Single/Doble o Triple",
        category: "Habitación",
    },

    {
        id: "5",
        imgSrc1: ImgEjecutiva1,
        imgSrc2: ImgEjecutiva2,
        imgSrc3: ImgEjecutiva3,
        imgSrc4: ImgEjecutiva4,
        title: "HABITACIONES EJECUTIVAS",
        description: "Habitaciones de un ambiente con un dormitorio con cama matrimonial, sala de estar y LCD. La dimensión aproximada de esta suite es de 30 m2.Base Single o Doble únicamente",
        subdescription: "Base single o doble únicamente.",
        category: "Habitación",
    },
    {
        id: "6",
        imgSrc1: ImgJunior1,
        imgSrc2: ImgJunior2,
        imgSrc3: ImgJunior3,
        imgSrc4: ImgJunior4,
        title: "SUITE JUNIOR",
        description: "Estas suites tienen tres ambientes, entre los que se encuentran un dormitorio principal con cama matrimonial, un segundo dormitorio con una cama de una plaza, confortable living comedor con sofá cama extensible, dos baños y balcón.",
        subdescription: "La dimensión aproximada de esta suite es de 78 m2.Base Doble/ Triple o  Cuádruple",
        category: "Suite",
    },
    {
        id: "7",
        imgSrc1: ImgHoney1,
        imgSrc2: ImgHoney2,
        imgSrc3: ImgHoney3,
        imgSrc4: ImgHoney4,
        title: "HONEYMOON SUITE",
        description: "Esta suite cuenta con una cálida ambientación y moderna decoración, más de 60 m2, sauna, jacuzzi, balcón y amplio baño con espectaculares vistas al Monumento a los Españoles, Bosques de Palermo y Río de la Plata.Base Single o Doble únicamente",
        subdescription: "Base single o doble únicamente.",
        category: "Habitación",
    },
    {
        id: "8",
        imgSrc1: ImgDiplomatica1,
        imgSrc2: ImgDiplomatica2,
        imgSrc3: ImgDiplomatica3,
        imgSrc4: ImgDiplomatica4,
        title: "SUITE DIPLOMÁTICA",
        description: "Suites de tres ambientes, entre los que se encuentran un dormitorio principal con cama matrimonial, un segundo dormitorio con dos camas de una plaza, confortable living comedor con sofá cama extensible, dos baños y balcón. La dimensión aproximada de esta suite es de 80 m2.Base Cuádruple o  Quíntuple",
        subdescription: "Base Cuádruple o  Quíntuple",
        category: "Suite",
    },
    {
        id: "9",
        imgSrc1: ImgDiscapacitados1,
        imgSrc2: ImgDiscapacitados2,
        imgSrc3: ImgDiscapacitados3,
        imgSrc4: ImgDiscapacitados4,
        title: "ADA HABITACIONES PARA DISCAPACITADOS",
        description: "Única habitación adaptada para huéspedes con movilidad reducida. La misma cuenta con un dormitorio con cama matrimonial o con dos camas de una plaza y un amplio living comedor. La dimensión aproximada de esta suite es de 30 mts2.",
        subdescription: "",
        category: "Habitación",
    },
];
