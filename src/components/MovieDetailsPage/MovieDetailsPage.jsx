import React, { Component, Suspense, lazy } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Loader from '../../common/Loader';
import movieByIdAPI from '../../utils/movieByIdAPI';
import routes from '../../utils/routes';
import './MovieDetailsPage.scss';

const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    movieByIdAPI
      .getMovieById(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;
    const { match, history } = this.props;

    return (
      <>
        {movie && (
          <div className="movie-details">
            <div className="info">
              <button className="info__button" onClick={history.goBack}>
                &larr; Go back
              </button>
              <div className="info__wrapper">
                <img
                  className="info__img"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
                <div className="info__detales">
                  <h2>{movie.title}</h2>
                  <p>
                    User score: <span>{movie.vote_average}</span>
                  </p>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                  <h4>Genres</h4>
                  <ul className="info__detales-list">
                    {movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="more">
              <h4>Additional information</h4>
              <ul>
                <li>
                  <Link to={`${routes.movies}/${match.params.movieId}/cast`}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link to={`${routes.movies}/${match.params.movieId}/reviews`}>
                    Reviews
                  </Link>
                </li>
              </ul>
              <div className="detales">
                <Switch>
                  <Suspense fallback={<Loader />}>
                    <Route path={`/movies/:movieId/cast`} component={Cast} />
                    <Route
                      path={`/movies/:movieId/reviews`}
                      component={Reviews}
                    />
                  </Suspense>
                </Switch>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
