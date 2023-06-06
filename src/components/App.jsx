import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import './styles.css';
import { getImages } from 'services/getImages';

export const App = () => {
  const [input, setInput] = useState('');
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    input &&
      getImages(input, pageNumber)
        .then(response => response.json())
        .then(images => {
          setImages(prevImages => [...prevImages, ...images.hits]);
          setStatus('resolved');
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
  }, [input, pageNumber]);

  const onClickLoad = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleSubmit = input => {
    setImages([]);
    setStatus('pending');
    setInput(input);
    setPageNumber(1);
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      <ImageGallery onClick={onClickLoad} images={images} status={status} />
    </>
  );
};
