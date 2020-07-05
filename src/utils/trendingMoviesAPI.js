import axios from 'axios';

const getTrendingMovies = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=772958286b23a151acc8c7c856a94813`,
    )
    .then(response => response.data.results);
};

export default { getTrendingMovies };
