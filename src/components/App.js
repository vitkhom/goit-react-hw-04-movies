import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';

// import Loader from '../common/Loader';
import routes from '../utils/routes';
import './App.scss';

const HomePage = lazy(() => import('./HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <hr />
        <div className="body">
          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <Route path={routes.home} exact component={HomePage} />
              <Route path={routes.movies} exact component={MoviesPage} />
              <Route path={routes.movieDetails} component={MovieDetailsPage} />
            </Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
