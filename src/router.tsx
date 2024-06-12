import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import GuestLayout from './layout/GuestLayout';
import Bedrooms from './pages/Bedrooms';
import RoomDetails from './pages/RoomDetails';
import AboutUs from './pages/AboutUs';
import Galeria from './pages/Galeria';


const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/inicio"/>
      },
      {
        path: '/inicio',
        element: <Home/>
      },
      {
        path: '/habitaciones',
        element: <Bedrooms/>
      },
      
      {
        path: '/habitacion/:id', 
        element: <RoomDetails/>, 
      },
      {
        path: '/conocenos', 
        element: <AboutUs/>, 
      },
      {
        path: '/galeria', 
        element: <Galeria/>, 
      },
    ]
  },
]);

export default router;
