// src/router.tsx
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import GuestLayout from './layout/GuestLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
        {
            path: "/",
            element: <Navigate to="/home"/>
        },
        {
            path: "/home",
            element: <Home/>
        },
    
    
    ]
  },

]);

export default router;
