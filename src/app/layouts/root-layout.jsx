import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../../widgets';

import s from './root-layout.module.css';

export const RootLayout = () => {
  return (
    <div className={s.root}>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
