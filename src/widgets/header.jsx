import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <ul style={{ borderBottom: '1px solid gray', margin: 0 }}>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="blog">Blog</NavLink>
        </li>
      </ul>
    </>
  );
};
