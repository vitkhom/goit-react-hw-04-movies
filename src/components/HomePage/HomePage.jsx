import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import trendingMoviesAPI from '../../utils/trendingMoviesAPI';
import routes from '../../utils/routes';

import Loader from '../../common/Loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class HomePage extends Component {
  state = {
    movies: [],
    error: '',
    loading: false,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    this.setState({
      loading: true,
    });

    trendingMoviesAPI
      .getTrendingMovies()
      .then(res => this.setState({ movies: res }))
      .catch(error => {
        this.setState({ error: error.message });
        toast.error(error.message, {
          position: 'top-center',
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <>
        <ToastContainer />
        {loading ? (
          <Loader />
        ) : (
          <div>
            <h2>Trending today</h2>
            <ul>
              {movies.map(({ id, original_title }) => (
                <li key={id}>
                  <Link to={`${routes.movies}/${id}`}>{original_title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default HomePage;
