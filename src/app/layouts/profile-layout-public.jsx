/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom';

import s from './profile-layout.module.css';
import { userRole } from '../../mocks';

export const ProfileLayoutPublic = ({ sideElements }) => {
  const role = userRole;

  return !role ? (
    <div className={s.profileLayout}>
      {sideElements}
      <div>
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={`${role}`} />
  );
};
