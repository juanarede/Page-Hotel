import CardsBedrooms from "../bedroomsComponents/CardsBedrooms";
import Header from "../bedroomsComponents/Header";
import Floating from "../homeComponents/Floating";




const Bedrooms: React.FC = () => {
    return(
  
      <>
       <Header/>
       <Floating/>
       <CardsBedrooms/>
      </>
    )
  };
  
  export default Bedrooms;