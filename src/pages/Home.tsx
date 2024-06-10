// import CheckIn from "../homeComponents/CheckIn";
import Aboutus from "../homeComponents/Aboutus";
import Floating from "../homeComponents/Floating";
import Header from "../homeComponents/Header";
import Location from "../homeComponents/Location";
import OurServices from "../homeComponents/OurServices";



const Home: React.FC = () => {
  return(

    <>
     <Header/>
     <Floating/>
     <Aboutus/>
    <OurServices/>
    <Location/>
    </>
  )
};

export default Home;
