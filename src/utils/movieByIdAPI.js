import axios from 'axios';

const getMovieById = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=772958286b23a151acc8c7c856a94813&language=en-US`,
    )
    .then(response => response.data);
};

export default { getMovieById };
