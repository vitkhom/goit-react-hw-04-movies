import axios from 'axios';

const getReviewsById = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=772958286b23a151acc8c7c856a94813&language=en-US&page=1`,
    )
    .then(response => response.data.results);
};

export default { getReviewsById };
