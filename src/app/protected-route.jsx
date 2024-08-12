/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';

import { userRole } from '#mocks.js';

const ProtectedRoute = ({ onlyUnAuth = false, navigateTo, children, component }) => {
  const role = userRole;
  const location = useLocation();

  // user unauth, but route only for auth users
  if (!role && !onlyUnAuth) {
    return <Navigate to={navigateTo ?? 'login'} state={{ from: location }} />;
  }

  // user auth, but route only for unauth user
  if (role && onlyUnAuth) {
    const { from } = location.state || { from: { pathname: '/' } };
    return <Navigate to={from} />;
  }

  return children ?? component;
};

export const OnlyAuth = ProtectedRoute;

export const OnlyUnAuth = ({ children, component, navigateTo }) =>
  children ? (
    <ProtectedRoute onlyUnAuth={true} navigateTo={navigateTo ?? '/'}>
      {children}
    </ProtectedRoute>
  ) : (
    <ProtectedRoute
      onlyUnAuth={true}
      component={component}
      navigateTo={navigateTo}
    ></ProtectedRoute>
  );
