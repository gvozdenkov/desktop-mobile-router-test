/* eslint-disable react/prop-types */
import { Link, Outlet } from 'react-router-dom';

import { adminPermissions, isRoot } from '#mocks.js';
import { filterRootAdminConfig } from '#shared/utils';

export const ProfileDetailsLayout = ({ header, menu, sideMenu, controls }) => {
  var adminMenu = menu && filterRootAdminConfig(menu, isRoot);
  var isShowSideMenu = sideMenu && adminPermissions.includes('SET_CATEGORY_POINTS');

  return (
    <div className="preview-border" style={{ height: '100%' }}>
      {header}
      <div className="preview-border" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {menu && (
          <ul className="preview-border" style={{ display: 'flex', gap: '20px' }}>
            {adminMenu.map((button, i) => (
              <li key={i}>
                <Link to={`${button.link}`}>{button.text}</Link>
              </li>
            ))}
          </ul>
        )}
        {isShowSideMenu && (
          <ul className="preview-border" style={{ display: 'flex', gap: '20px' }}>
            {sideMenu.map((button, i) => (
              <li key={i}>
                <Link to={`${button.link}`}>{button.text}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {controls}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
