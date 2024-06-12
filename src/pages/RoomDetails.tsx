import Floating from "../homeComponents/Floating";
import BedroomDetails from "../roomDetailsComponents/BedroomsDetails";
import Header from "../roomDetailsComponents/Header";




const RoomDetails: React.FC = () => {
    return(
  
      <>
        <Header />
        <Floating />
        <BedroomDetails />
      </>
    )
  };
  
  export default RoomDetails;