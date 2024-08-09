import { userRole } from '../mocks';

/* eslint-disable react/prop-types */
export const UserInfo = () => {
  const role = userRole;

  return role ? (
    <p className="preview-border">User Info {role}</p>
  ) : (
    <p className="preview-border">Unauthorized</p>
  );
};
