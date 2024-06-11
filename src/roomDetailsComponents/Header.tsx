import { useParams } from "react-router-dom";
import { selectedCard, CardSelected } from "../data/selectedCard"; 

const Header: React.FC = () => {
    let { id } = useParams<{ id: string }>();
    const card: CardSelected | undefined = selectedCard.find((card: CardSelected) => card.id === id); 
    const imgUrl = card ? card.imgSrc1 : ''; 
    const title = card ? card.title : ''; 
    return (
        <div className="relative h-[400px] overflow-hidden">
            <div
                className="absolute top-0 bottom-0 left-0 right-0 w-full h-full transition-opacity duration-1000 bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${imgUrl})`, 
                    backgroundPosition: 'center bottom',
                }}
            >
                <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-fixed bg-black/60">
                    <div className="flex items-center justify-center h-full">
                        <div className="px-6 text-center text-white md:px-12">
                            <h3 className="mb-8 text-3xl font-bold">{title}</h3> {/* Utiliza el título aquí */}
                            {/* <p className="text-lg">LORem IPSU</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
