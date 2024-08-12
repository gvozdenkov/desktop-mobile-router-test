import { Outlet } from 'react-router-dom';

import { mockApplications } from '#mocks.js';
import { ApplicationCard, CardList } from '#widgets';

export const VolunteerActiveApplicationPage = () => {
  const applications = mockApplications;

  return (
    <div>
      {applications.length && <CardList Card={ApplicationCard} data={applications} />}
      <Outlet />
    </div>
  );
};
