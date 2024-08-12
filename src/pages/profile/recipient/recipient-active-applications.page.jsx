import { Link, Outlet } from 'react-router-dom';

import { mockApplications } from '#mocks.js';
import { ApplicationCard, CardList } from '#widgets';

export const RecipientActiveApplicationPage = () => {
  const applications = mockApplications.slice(2, 4);

  return (
    <div>
      <Link to={'new-application'}>+ Создать заявку</Link>
      {applications.length && <CardList Card={ApplicationCard} data={applications} />}
      <Outlet />
    </div>
  );
};
