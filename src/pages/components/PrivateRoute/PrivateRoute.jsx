import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function PrivateRoutes() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    if (!token) {
        navigate('/'); // przekierowanie użytkownika do strony logowania, jeśli nie ma tokena
        return null; 
    }

    return <Outlet />; 
}
