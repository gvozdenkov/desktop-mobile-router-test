import { createPortal } from 'react-dom';

import s from './modal.module.css';
import { useNavigate } from 'react-router-dom';

export const Modal = ({ children }) => {
  const navigate = useNavigate();

  return createPortal(
    <div className={s.modalOverlay} onClick={() => navigate(-1)}>
      <div className={s.modalContent}>{children}</div>
    </div>,
    document.querySelector('#modal-portal')
  );
};
