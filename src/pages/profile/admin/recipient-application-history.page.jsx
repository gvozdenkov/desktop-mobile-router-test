import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import { mockApplications, mockRecipients } from '#mocks.js';
import { UserCard, ApplicationCard, CardList } from '#widgets';

export const RecipientApplicationHistoryPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const user = mockRecipients.filter((volunteer) => volunteer.id === userId)[0];

  const applications = mockApplications.filter((application) => application.recipientId === userId);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      <UserCard data={user} />

      <Link to={'new-application'}>+ Создать заявку</Link>

      {applications.length && <CardList Card={ApplicationCard} data={applications} />}
      <Outlet />
    </div>
  );
};
