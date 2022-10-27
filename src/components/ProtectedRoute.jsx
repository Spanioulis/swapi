import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, validate }) => {
    if (!validate) {
        // console.log('Protected Route', validate);
        return <Navigate to="/login" />;
    }
    return children;
};
