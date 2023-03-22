import React from 'react';
import { Navigate } from 'react-router-dom';
import {UserAuth} from './AuthContext';

const Protected = ({ children }) => {
  const { logOut, user } = UserAuth();
  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default Protected;