/* eslint-disable react/prop-types */

import { mockVolunteers } from '#mocks.js';
import { UserCard, CardList } from '#widgets';

export const VolunteerApplicationsPage = () => {
  const volunteers = mockVolunteers;

  return <CardList Card={UserCard} data={volunteers} />;
};
