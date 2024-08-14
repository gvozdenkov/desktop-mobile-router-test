import { createBrowserRouter, Link, redirect } from 'react-router-dom';

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
  VolunteerMapPage,
  VolunteerActiveApplicationPage,
  VolunteerComplitedApplicationPage,
  RecipientActiveApplicationPage,
  RecipientComplitedApplicationPage,
  ScoreSetupPage,
  NewAdminPage,
} from '../pages';
import { volunteerProfileButtons } from '#constants/volunteer-profile-buttons.js';
import { recipientProfileButtons } from '#constants/recipient-profile-buttons.js';
import { adminProfileApplicationsSideMenu } from '#constants/admin-applications-side-menu.js';
import { adminProfileConfirmatinMenuForAdmins } from '#constants/admin-confirmation-menu-for-admins.js';
import { chatMenu } from '#constants/chat-menu.js';

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
        path: 'chat',
        element: (
          <ProfileLayoutPrivate
            allowed={['admin']}
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
            loader: () => redirect('waiting'),
          },
          {
            path: 'waiting',
            element: <ProfileDetailsLayout header={<SmartHeader title="Чат" />} menu={chatMenu} />,
            children: [
              {
                index: true,
                element: <p>waiting chats</p>,
              },
            ],
          },
          {
            path: 'in-progress',
            element: <ProfileDetailsLayout header={<SmartHeader title="Чат" />} menu={chatMenu} />,
            children: [
              {
                index: true,
                element: <p>in progress chats</p>,
              },
            ],
          },
          {
            path: 'conflict',
            element: <ProfileDetailsLayout header={<SmartHeader title="Чат" />} menu={chatMenu} />,
            children: [
              {
                index: true,
                element: <p>conflict chats</p>,
              },
            ],
          },
        ],
      },
      {
        path: 'profile/admin',
        element: (
          <ProfileLayoutPrivate
            allowed={['admin']}
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
            ],
          },
          {
            path: 'confirmations/admins',
            element: (
              <ProfileDetailsLayout
                header={<SmartHeader title="Управление администраторами" withFilter />}
                menu={adminProfileConfirmatinMenuForAdmins}
                controls={
                  <div style={{ display: 'flex', flexFlow: 'column', gap: '20px 0' }}>
                    <Link to={'new-admin'}>+ Создать администратора</Link>
                    <label>
                      Find
                      <input type="text" />
                    </label>
                  </div>
                }
              />
            ),
            children: [
              {
                index: true,
                element: <ConfirmAdminsPage />,
              },
            ],
          },
          {
            path: 'confirmations/admins/new-admin',
            element: (
              <ProfileDetailsLayout header={<SmartHeader title="Добавление администраторов" />} />
            ),
            children: [
              {
                index: true,
                element: <NewAdminPage />,
              },
            ],
          },
          {
            path: 'statistics',
            element: (
              <ProfileDetailsLayout
                header={<SmartHeader title="Статистика" withFilter />}
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
                header={<SmartHeader title="Создание / Редактирование заявки" withFilter />}
                menu={adminProfileApplicationsMenu}
                sideMenu={adminProfileApplicationsSideMenu}
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
                header={<SmartHeader title="Создание / Редактирование заявки" withFilter />}
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
                header={<SmartHeader title="Создание / Редактирование заявки" withFilter />}
              />
            ),
            children: [
              {
                path: ':userId',
                element: <RecipientApplicationHistoryPage />,
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
            path: 'applications/score',
            element: <ProfileDetailsLayout header={<SmartHeader title="Настройка баллов" />} />,
            children: [
              {
                index: true,
                element: <ScoreSetupPage />,
              },
            ],
          },
        ],
      },
      {
        path: 'profile/volunteer',
        element: (
          <ProfileLayoutPrivate
            allowed={['volunteer']}
            sideElements={
              <div>
                <UserInfo />
                <ProfileButtons buttons={volunteerProfileButtons} disabled={false} />
              </div>
            }
          />
        ),
        children: [
          {
            index: true,
            loader: () => redirect('map'),
          },
          {
            path: 'map',
            element: <ProfileDetailsLayout header={<SmartHeader title="Карта заявок" />} />,
            children: [
              {
                index: true,
                element: <VolunteerMapPage />,
              },
            ],
          },
          {
            path: 'active',
            element: (
              <ProfileDetailsLayout header={<SmartHeader title="Активные заявки" withFilter />} />
            ),
            children: [
              {
                index: true,
                element: <VolunteerActiveApplicationPage />,
              },
            ],
          },
          {
            path: 'complited',
            element: (
              <ProfileDetailsLayout
                header={<SmartHeader title="Завершенные заявки" withFilter />}
              />
            ),
            children: [
              {
                index: true,
                element: <VolunteerComplitedApplicationPage />,
              },
            ],
          },
        ],
      },
      {
        path: 'profile/recipient',
        element: (
          <ProfileLayoutPrivate
            allowed={['recipient']}
            sideElements={
              <div>
                <UserInfo />
                <ProfileButtons buttons={recipientProfileButtons} disabled={false} />
              </div>
            }
          />
        ),
        children: [
          {
            index: true,
            loader: () => redirect('active'),
          },
          {
            path: 'active',
            element: (
              <ProfileDetailsLayout header={<SmartHeader title="Активные заявки" withFilter />} />
            ),
            children: [
              {
                index: true,
                loader: () => redirect('active'),
              },
              {
                path: 'active',
                element: <RecipientActiveApplicationPage />,
                // Need to fix strange path /active/active
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
            path: 'complited',
            element: (
              <ProfileDetailsLayout
                header={<SmartHeader title="Завершенные заявки" withFilter />}
              />
            ),
            children: [
              {
                index: true,
                element: <RecipientComplitedApplicationPage />,
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
            allowed={['admin', 'recipient', 'volunteer']}
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
