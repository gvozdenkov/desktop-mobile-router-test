/* eslint-disable react/prop-types */
import { Link, Outlet } from 'react-router-dom';

import { isRoot } from '#mocks.js';
import { filterRootAdminConfig } from '#shared/utils';

export const ProfileDetailsLayout = ({ header, menu, controls }) => {
  var adminMenu = menu && filterRootAdminConfig(menu, isRoot);

  return (
    <div className="preview-border" style={{ height: '100%' }}>
      {header}
      {menu && (
        <ul className="preview-border" style={{ display: 'flex', gap: '20px' }}>
          {adminMenu.map((button, i) => (
            <li key={i}>
              <Link to={`${button.link}`}>{button.text}</Link>
            </li>
          ))}
        </ul>
      )}
      {controls}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
