import PropTypes from 'prop-types';

import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ el }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(true);
  };
  const closeModal = () => {
    setIsOpened(false);
  };

  return (
    <>
      {' '}
      <li className="ImageGalleryItem">
        <img
          src={el.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
          onClick={handleClick}
        />
        {isOpened && <Modal url={el.largeImageURL} closeModal={closeModal} />}
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  el: PropTypes.object,
};
