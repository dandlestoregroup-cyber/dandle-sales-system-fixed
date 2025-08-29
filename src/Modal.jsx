import React from 'react';

function Modal({ show, onClose, content, t, language }) {
  if (!show) {
    return null;
  }

  return (
    <div className={`modal-overlay ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="modal">
        <div className="modal-content">{content}</div>
        <button onClick={onClose}>{t('close')}</button>
      </div>
    </div>
  );
}

export default Modal;
