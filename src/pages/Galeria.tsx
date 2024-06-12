import GaleriaImage from "../galeriaComponents/GaleriaImage";
import Header from "../galeriaComponents/HeaderGaleria";
import Floating from "../homeComponents/Floating";


const Galeria: React.FC = () => {
    return(
  
      <>
      <Header/>
      <Floating/>
      <GaleriaImage/>
       
      </>
    )
  };
  
  export default Galeria;