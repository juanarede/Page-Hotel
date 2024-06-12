import ImageGaleria from "./ImageGaleria";
import imagesData from '../data/ImageData'; 


const GaleriaImage: React.FC = () => {

   

    return (
        <>
    <div className="grid grid-cols-1 gap-4 p-4 mt-20 mb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imagesData.map((image, index) => (
          <ImageGaleria key={index} src={image.src} alt={image.alt} />
        ))}
      </div>

        </>

    )


};

export default GaleriaImage