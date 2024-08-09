import { mockVolunteers } from '#mocks.js';
import { ConfirmCard, CardList } from '#widgets';

export const ConfirmVolunteerPage = () => {
  const volunteers = mockVolunteers;

  return <CardList Card={ConfirmCard} data={volunteers} />;
};
