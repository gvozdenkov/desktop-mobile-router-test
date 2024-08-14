/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

export const ProfileButtons = ({ buttons, disabled }) => {
  return buttons.length && !disabled ? (
    <ul className="preview-border">
      {buttons.map((button, i) => (
        <li key={i}>
          <NavLink to={`${button.link}`}>{button.text}</NavLink>
        </li>
      ))}
    </ul>
  ) : (
    <p>Buttons inactive</p>
  );
};
