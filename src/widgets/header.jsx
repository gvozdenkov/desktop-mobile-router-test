import { mainMenu } from '#constants/main-menu.js';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <ul style={{ borderBottom: '1px solid gray', margin: 0, display: 'flex', gap: '20px' }}>
        {mainMenu.map((menu) => (
          <li key={menu.link}>
            <NavLink to={menu.link}>{menu.text}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
