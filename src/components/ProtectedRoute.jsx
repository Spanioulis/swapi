import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, validate }) => {
    console.log(validate);
    if (!validate) {
        console.log('Protected Route', validate);
        return <Navigate to="/login" />;
    }
    return children;
};
