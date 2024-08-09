import { mockRecipients } from '#mocks.js';
import { ConfirmCard, CardList } from '#widgets';

export const ConfirmRecipientPage = () => {
  const recipients = mockRecipients;

  return <CardList Card={ConfirmCard} data={recipients} />;
};
