import ImageAbout1 from "../assets/img/vivi-palermo.jpg";
import ImageAbout2 from "../assets/img/disfruta2.jpg";
import ImageAbout3 from "../assets/img/soluciones-corporativas.jpg";
import { LocationIcon } from "../icons/LocationIcon";

const Aboutus: React.FC = () => {

    return (
        <>
            <div className="relative pt-16 pb-32 space-y-24 overflow-hidden bg-white">
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="max-w-xl px-6 mx-auto lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                            <div>
                                <div>
                                    <span className="flex items-center justify-center w-12 h-12 bg-[#00acee] bg-opacity-50 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-black">
                                        VIVÍ PALERMO
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        El Hotel Cristoforo Colombo está situado en un lugar de privilegio en el corazón de los bosques de Palermo, en la misma manzana del Centro de Convenciones “La Rural”, próximo a la Embajada de los Estados Unidos, a pocos metros del Campo de Polo, Hipódromo y a escasos minutos del Aeroparque Metropolitano.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-6 lg:relative lg:m-0 lg:h-full lg:px-0 ">
                                <div className="about-container">
                                    <img loading="lazy"
                                        className="about-image"
                                        src={ImageAbout1}
                                        alt="Viví Palermo" />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>




                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="max-w-xl px-6 mx-auto lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div>
                                    <span className="flex items-center justify-center w-12 h-12 bg-[#00acee] bg-opacity-50 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-tools-kitchen-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" /></svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-black">
                                        DISFRUTÁ
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        Nuestros huéspedes pueden disfrutar de la cocina argentina y mediterránea en el Restaurante “Puerto de Palos” y en el Bar “Timón” degustar una gran variedad de bebidas y platos ligeros.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-6 lg:relative lg:m-0 lg:h-full lg:px-0 ">
                                <div className="about-container">
                                    <img loading="lazy"
                                        className="about-image"
                                        src={ImageAbout2}
                                        alt="Viví Palermo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="max-w-xl px-6 mx-auto lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                            <div>
                                <div>
                                    <span className="flex items-center justify-center w-12 h-12 bg-[#00acee] bg-opacity-50 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            className="w-8 h-8 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-black">
                                        SOLUCIONES CORPORATIVAS
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        Descubra nuestros salones en alquiler donde podrán llevarse a cabo exitosas reuniones de trabajo. Un ambiente acogedor y confortable con múltiples posibilidades de adaptación, que permitirán satisfacer cada uno de sus requerimientos.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-6 lg:relative lg:m-0 lg:h-full lg:px-0 ">
                                <div className="about-container">
                                    <img loading="lazy"
                                        className="about-image"
                                        src={ImageAbout3}
                                        alt="Viví Palermo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )


};

export default Aboutus