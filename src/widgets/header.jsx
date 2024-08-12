import { NavLink } from 'react-router-dom';

import { mainMenu } from '#constants/main-menu.js';
import { isAdmin } from '#mocks.js';
import { filterAdminConfig } from '#shared/utils/check-root-admin.js';

export const Header = () => {
  const userMenu = filterAdminConfig(mainMenu, isAdmin);

  return (
    <>
      <ul
        style={{
          borderBottom: '1px solid gray',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {userMenu.map((menu) => (
          <li key={menu.link}>
            <NavLink to={menu.link}>{menu.text}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
