import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export const ImageGallery = ({ onClick, images, status }) => {
  if (status === 'resolved') {
    return (
      <>
        <ul className="ImageGallery">
          {images &&
            images.map(el => {
              return <ImageGalleryItem el={el} key={el.id} />;
            })}
        </ul>
        {images.length > 0 && images.length % 12 === 0 && (
          <Button onClick={onClick} />
        )}
      </>
    );
  }
  if (status === 'pending') {
    return <Loader />;
  }
};

ImageGallery.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
  status: PropTypes.string,
};
