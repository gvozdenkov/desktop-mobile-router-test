/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export const ProfileButtons = ({ buttons, disabled }) => {
  return buttons.length && !disabled ? (
    <ul className="preview-border">
      {buttons.map((button, i) => (
        <li key={i}>
          <Link to={`${button.link}`}>{button.text}</Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>Buttons inactive</p>
  );
};
