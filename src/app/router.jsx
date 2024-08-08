import { createBrowserRouter } from 'react-router-dom';
import { loader as rootLoader, action as rootAction, RootLayout } from './routes/root';
import { ErrorPage } from '../pages/error-page';
import { Contact, loader as contactLoader } from './routes/contact';
import { EditContact, action as editAction } from './routes/contact-edit';
import { Index } from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: rootLoader,
    action: rootAction,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'contacts/:contactId',
        loader: contactLoader,
        element: <Contact />,
      },
      {
        path: 'contacts/:contactId/edit',
        loader: contactLoader,
        action: editAction,
        element: <EditContact />,
      },
    ],
  },
]);
