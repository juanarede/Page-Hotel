import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/bedroomdetails.scss";
import { cardData } from "../data/cardData"; // Asegúrate de usar la ruta correcta para importar cardData

const BedroomDetails: React.FC = () => {
    let { id } = useParams<{ id: string }>();
    const card = cardData.find((card: { id: string | undefined; }) => card.id === id);

    const [mainImage, setMainImage] = useState(card?.imgSrc1);

    if (!card) {
        return <div>Room not found</div>;
    }

    const images = [card.imgSrc1, card.imgSrc2, card.imgSrc3, card.imgSrc4].filter(img => img && img !== 'null');

    return (
        <>
            <section style={{ marginTop: "7rem" }} className="py-12 sm:py-16">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 gap-12 mt-8 lg:col-gap-12 xl:col-gap-16 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                        <div className="lg:col-span-3 lg:row-end-1">
                            <div className="lg:flex lg:items-start">
                                <div className="lg:order-2 lg:ml-5">
                                    <div className="max-w-xl overflow-hidden rounded-lg">
                                        <img className="object-cover w-full h-full max-w-full" src={mainImage} alt={card.title} />
                                    </div>
                                </div>
                                <div className="w-full mt-2 lg:order-1 lg:w-32 lg:flex-shrink-0">
                                    <div className="flex flex-row items-start lg:flex-col">
                                        {images.map((img, index) => (
                                            <button 
                                                key={index}
                                                type="button" 
                                                onClick={() => setMainImage(img)} 
                                                className={`h-20 mb-3 overflow-hidden text-center border-2 rounded-lg flex-0 aspect-square ${mainImage === img ? 'border-gray-900' : 'border-transparent'}`}
                                            >
                                                <img className="object-cover w-full h-full" src={img} alt={card.title} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                            <h1 className="mt-8 text-3xl font-bold">{card.title}</h1>
                            <p className="mt-4">{card.description}</p>
                            {card.subdescription && (
                                <p className="mt-4" dangerouslySetInnerHTML={{ __html: card.subdescription }} />
                            )}
                            <div className="flex items-center mt-5">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} className="block w-4 h-4 text-yellow-500 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <ul className="mt-8 space-y-2">
                                <li className="flex items-center text-sm font-medium text-left text-gray-600">
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bed">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M22 17v-3h-20" />
                                        <path d="M2 8v9" />
                                        <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" />
                                    </svg>
                                    <div className="ml-3">
                                        {card.category}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BedroomDetails;
