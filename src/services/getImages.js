const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36255807-75837d89431772e88b07b47aa';

export const getImages = (searchQuerry, pageNumber) => {
  return fetch(
    `${BASE_URL}?q=${searchQuerry}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
