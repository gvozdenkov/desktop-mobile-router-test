/* eslint-disable react/prop-types */

import { mockRecipients } from '#mocks.js';
import { CardList, UserCard } from '#widgets';

export const RecipientApplicationsPage = () => {
  const recipients = mockRecipients;

  return <CardList Card={UserCard} data={recipients} />;
};
