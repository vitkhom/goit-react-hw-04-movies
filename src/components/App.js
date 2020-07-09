import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';

import routes from '../utils/routes';
import './App.scss';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.movies} exact component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
