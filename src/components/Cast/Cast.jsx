import React, { Component } from 'react';

import Loader from '../../common/Loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import castByIdAPI from '../../utils/castByIdAPI';
import imageUrl from '../../utils/imageUrl';
import './Cast.scss';

import noImage from '../../img/no_photo.jpg';

class Cast extends Component {
  state = {
    cast: [],
    error: '',
    loading: false,
  };

  componentDidMount() {
    this.fetchCast();
  }

  fetchCast = () => {
    this.setState({
      loading: true,
    });

    castByIdAPI
      .getCastById(this.props.match.params.movieId)
      .then(cast => this.setState({ cast }))
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
    const { cast, loading } = this.state;
    return (
      <>
        <ToastContainer />
        {loading ? (
          <Loader />
        ) : (
          <div className="cast">
            {cast && (
              <ul className="cast__list">
                {cast.map(({ cast_id, profile_path, name, character }) => (
                  <li className="cast__list-item" key={cast_id}>
                    {profile_path ? (
                      <img
                        className="cast__list-img"
                        src={`${imageUrl.baseUrl}/${profile_path}`}
                        alt=""
                      />
                    ) : (
                      <img
                        className="cast__list-img"
                        src={noImage}
                        alt=""
                        width="100"
                        height="200"
                      />
                    )}

                    <h3 className="cast__list-title">{name}</h3>
                    <p className="cast__list-description">
                      Character: {character}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </>
    );
  }
}

export default Cast;
