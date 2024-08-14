/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

export const CardList = ({ Card, data, noLink }) => {
  return (
    <ul className="preview-border" style={{ display: 'flex', flexFlow: 'column', gap: '10px' }}>
      {data.map((cardData) => (
        <li key={cardData.id}>
          {noLink ? (
            <Card data={cardData} />
          ) : (
            <Link to={cardData.id}>
              <Card data={cardData} />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
