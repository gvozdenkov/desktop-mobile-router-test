/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom';

import s from './profile-layout.module.css';
import { userRole } from '../../mocks';
import { OnlyUnAuth } from '#app/protected-route.jsx';

export const ProfileLayoutPublic = ({ sideElements }) => {
  const role = userRole;

  const navigateTo = `${role}`;

  return role ? (
    <Navigate to={navigateTo} />
  ) : (
    <OnlyUnAuth>
      <div className={s.profileLayout}>
        {sideElements}
        <div>
          <Outlet />
        </div>
      </div>
    </OnlyUnAuth>
  );
};
