import axios from 'axios';

const getCastById = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=772958286b23a151acc8c7c856a94813`,
    )
    .then(response => response.data.cast);
};

export default { getCastById };
