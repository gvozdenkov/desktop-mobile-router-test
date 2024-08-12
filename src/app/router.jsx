import { createBrowserRouter, redirect } from 'react-router-dom';

import {
  ProfileDetailsLayout,
  ProfileLayoutPrivate,
  ProfileLayoutPublic,
  RootLayout,
} from './layouts';

import { ProfileButtons, SmartHeader, UserInfo } from '../widgets';

import {
  adminProfileApplicationsMenu,
  adminProfileButtons,
  adminProfileConfirmatinMenu,
  adminProfileStatisticsMenu,
} from '../constants';

import {
  ConfirmRecipientPage,
  ConfirmVolunteerPage,
  ApplicationStatisticsPage,
  ErrorPage,
  NewApplicationPage,
  RecipientApplicationHistoryPage,
  RecipientApplicationsPage,
  VolunteerApplicationHistoryPage,
  UserStatisticsPage,
  VolunteerApplicationsPage,
  ConfirmUnprocessedPage,
  ConfirmAdminsPage,
  BlogPage,
  PolicyPage,
  ContactsPage,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'profile',
        errorElement: <ErrorPage />,
        element: (
          <ProfileLayoutPublic
            sideElements={
              <div>
                <UserInfo />
                <ProfileButtons buttons={adminProfileButtons} disabled={true} />
              </div>
            }
          />
        ),
        children: [
          {
            index: true,
            element: <p>Public Map</p>,
          },
        ],
      },
      {
        path: 'profile/admin',
        element: (
          <ProfileLayoutPrivate
            sideElements={
              <div>
                <UserInfo />
                <ProfileButtons buttons={adminProfileButtons} disabled={false} />
              </div>
            }
          />
        ),
        children: [
          {
            index: true,
            loader: () => redirect('confirmations'),
          },
          {
            path: 'confirmations',
            element: (
              <ProfileDetailsLayout
                header={<SmartHeader title="Подтверждение / Блокировка" />}
                menu={adminProfileConfirmatinMenu}
                controls={
                  <label>
                    Find
                    <input type="text" />
                  </label>
                }
              />
            ),
            children: [
              {
                index: true,
                loader: () => redirect('volunteers'),
              },
              {
                path: 'volunteers',
                element: <ConfirmVolunteerPage />,
              },
              {
                path: 'recipients',
                element: <ConfirmRecipientPage />,
              },
              {
                path: 'unprocessed',
                element: <ConfirmUnprocessedPage />,
              },
              {
                path: 'admins',
                element: <ConfirmAdminsPage />,
              },
            ],
          },
          {
            path: 'statistics',
            element: (
              <ProfileDetailsLayout
                header={<SmartHeader title="Статистика" />}
                menu={adminProfileStatisticsMenu}
              />
            ),
            children: [
              {
                index: true,
                loader: () => redirect('applications'),
              },
              {
                path: 'applications',
                element: <ApplicationStatisticsPage />,
              },
              {
                path: 'users',
                element: <UserStatisticsPage />,
              },
            ],
          },
          {
            path: 'applications',
            element: (
              <ProfileDetailsLayout
                header={<SmartHeader title="Создание / Редактирование заявки" />}
                menu={adminProfileApplicationsMenu}
                controls={
                  <label>
                    Find
                    <input type="text" />
                  </label>
                }
              />
            ),
            children: [
              {
                index: true,
                loader: () => redirect('volunteers'),
              },
              {
                path: 'volunteers',
                element: <VolunteerApplicationsPage />,
              },
              {
                path: 'recipients',
                element: <RecipientApplicationsPage />,
              },
            ],
          },
          {
            path: 'applications/volunteers',
            element: (
              <ProfileDetailsLayout
                header={<SmartHeader title="Создание / Редактирование заявки" />}
              />
            ),
            children: [
              {
                path: ':userId',
                element: <VolunteerApplicationHistoryPage />,
                children: [
                  {
                    path: 'new-application',
                    element: <NewApplicationPage />,
                  },
                ],
              },
            ],
          },
          {
            path: 'applications/recipients',
            element: (
              <ProfileDetailsLayout
                header={<SmartHeader title="Создание / Редактирование заявки" />}
              />
            ),
            children: [
              {
                path: ':userId',
                element: <RecipientApplicationHistoryPage />,
                children: [
                  {
                    path: 'new-application-yo',
                    element: <NewApplicationPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'policy',
        element: <PolicyPage />,
      },
      {
        path: 'contacts',
        element: (
          <ProfileLayoutPrivate
            sideElements={
              <div>
                <UserInfo />
              </div>
            }
          />
        ),
        children: [
          {
            index: true,
            element: <ContactsPage />,
          },
        ],
      },
    ],
  },
]);
