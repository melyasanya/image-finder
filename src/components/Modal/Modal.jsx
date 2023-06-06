import PropTypes from 'prop-types';

import { useEffect } from 'react';

export const Modal = ({ url, closeModal }) => {
  useEffect(() => {
    const handleESC = e => {
      if (e.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleESC);
    return () => {
      window.removeEventListener('keydown', handleESC);
    };
  }, [closeModal]);
  const handleOverlay = e => {
    if (e.target.className === 'Overlay') {
      closeModal();
    }
  };
  return (
    <div className="Overlay" onClick={handleOverlay}>
      <div className="Modal">
        <img src={url} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: PropTypes.string,
  closeModal: PropTypes.func,
};
