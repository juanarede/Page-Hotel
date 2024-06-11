import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import GuestLayout from './layout/GuestLayout';
import Bedrooms from './pages/Bedrooms';
import RoomDetails from './pages/RoomDetails';


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
    ]
  },
]);

export default router;
