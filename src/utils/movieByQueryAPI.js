import axios from 'axios';

const getMovieByQuery = query => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=772958286b23a151acc8c7c856a94813&language=en-US&query=${query}&page=1&include_adult=true`,
    )
    .then(response => response.data.results);
};

export default { getMovieByQuery };
