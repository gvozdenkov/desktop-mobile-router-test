import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import { mockApplications, mockVolunteers } from '#mocks.js';
import { UserCard, ApplicationCard, CardList } from '#widgets';

export const VolunteerApplicationHistoryPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const user = mockVolunteers.filter((volunteer) => volunteer.id === userId)[0];

  const applications = mockApplications.filter((application) => application.volunteerId === userId);

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
