// plik PrivateRoute.jsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Załóżmy, że masz funkcję, która sprawdza, czy użytkownik jest zalogowany
// Możesz ją zaimportować lub zaimplementować samodzielnie
import { isUserLoggedIn } from './utils/auth';

const PrivateRoute = ({ element, path }) => {
  return (
    <Route
      path={path}
      element={isUserLoggedIn() ? (
        element
      ) : (
        <Navigate to="/login" replace />
      )}
    />
  );
};

export default PrivateRoute;
