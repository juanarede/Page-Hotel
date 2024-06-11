// src/router.tsx
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import GuestLayout from './layout/GuestLayout';
import Bedrooms from './pages/Bedrooms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
        {
            path: "/",
            element: <Navigate to="/inicio"/>
        },
        {
            path: "/inicio",
            element: <Home/>
        },
        {
          path: "/habitaciones",
          element: <Bedrooms/>
      },
    
    
    ]
  },

]);

export default router;
