import { Outlet } from 'react-router-dom';
import Navbar from '../layoutComponents/Navbar';
import Footer from '../layoutComponents/Footer';

const GuestLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default GuestLayout;