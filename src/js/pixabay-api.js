import axios from "axios";

export default function getImagesByQuery(query) {
  axios.defaults.baseURL = 'https://pixabay.com';
  const response = axios.get( '/api/', {
    params : {
    key: '41896213-148f054eadfc6d224b6c8f8ef',
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,},
  }
  )
   
  return response.then(res => res.data);
}