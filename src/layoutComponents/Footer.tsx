import { EmailIcon } from "../icons/EmailIcon";
import { LocationIcon } from "../icons/LocationIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";

const Footer: React.FC = () => {
    return (
      <>
        <footer className="w-full bg-black py-14">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <a href="" className="flex justify-center ">
                        <img style={{ width:"10rem", marginBottom:"1rem" }} src="https://www.hotelcc.com.ar/wp-content/uploads/2013/12/Logo_w.png" className="mr-3" alt="CodewithFaraz Logo" />
                    </a>
                    <ul className="flex flex-col items-center justify-center py-16 mb-10 text-lg transition-all duration-500 border-b border-gray-200 gap-7 md:flex-row md:gap-12">
                        <li>
                            <a href="#" className="flex items-center text-white hover:text-[#00acee]">
                                <LocationIcon /> Fray Justo S. M. de Oro 2747
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-white hover:text-[#00acee]">
                                <WhatsappIcon /> (011) 4778-4945
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-white hover:text-[#00acee]">
                                <EmailIcon /> reservas@hotelcc.com.ar
                            </a>
                        </li>
                    </ul>

                    <div className="flex items-center justify-center space-x-7 mb-14">
                        <a href="#" className="block text-gray-300 transition-all duration-500 hover:text-[#00acee]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                            </svg>
                        </a>
                        <a href="#" className="block text-gray-300 transition-all duration-500 hover:text-[#00acee]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/>
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
                                <path d="M16.5 7.5l0 .01"/>
                            </svg>
                        </a>
                        <a href="#" className="block text-gray-300 transition-all duration-500 hover:text-[#00acee]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"/>
                            </svg>
                        </a>
                        <a href="#" className="block text-gray-300 transition-all duration-500 hover:text-[#00acee]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-google">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z"/>
                            </svg>
                        </a>
                        <a href="#" className="block text-gray-300 transition-all duration-500 hover:text-[#00acee]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/>
                                <path d="M8 11l0 5"/>
                                <path d="M8 8l0 .01"/>
                                <path d="M12 16l0 -5"/>
                                <path d="M16 16v-3a2 2 0 0 0 -4 0"/>
                            </svg>
                        </a>
                    </div>
                    <span className="block text-lg text-center text-gray-500">©<a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.</span>
                </div>
            </div>
        </footer>
      </>
    )
};

export default Footer;
