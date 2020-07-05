import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Searchbox from '../Searchbox';
import queryString from 'query-string';
import movieByQueryAPI from '../../utils/movieByQueryAPI';
import routes from '../../utils/routes';

import Loader from '../../common/Loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      this.fetchMoviesWithQuery(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = queryString.parse(prevProps.location.search);
    const { query: nextQuery } = queryString.parse(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMoviesWithQuery(nextQuery);
    }
  }

  handleChangeQuery = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  fetchMoviesWithQuery = query => {
    this.setState({
      loading: true,
    });

    movieByQueryAPI
      .getMovieByQuery(query)
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
        <Searchbox onSubmit={this.handleChangeQuery} />
        {loading ? (
          <Loader />
        ) : (
          <ul>
            {movies.map(({ id, original_title }) => (
              <li key={id}>
                <Link to={`${routes.movies}/${id}`}>{original_title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
