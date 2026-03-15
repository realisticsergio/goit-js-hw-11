import axios from 'axios';
const API_KEY = '55034335-d102dc4a43f72748c32c038be';


export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';

  return axios.get(BASE_URL, {
    params: {
      key: API_KEY, 
      q: query, 
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
  .then(response => response.data);
}
