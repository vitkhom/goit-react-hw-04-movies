import React, { Component } from 'react';
import reviewsByIdAPI from '../../utils/reviewsByIdAPI';

import Loader from '../../common/Loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Revievs extends Component {
  state = {
    reviews: [],
    error: '',
    loading: false,
  };

  componentDidMount() {
    this.fetchRevievs();
  }

  fetchRevievs = () => {
    this.setState({
      loading: true,
    });

    reviewsByIdAPI
      .getReviewsById(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews }))
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
    const { reviews, loading } = this.state;

    return (
      <>
        <ToastContainer />
        {loading ? (
          <Loader />
        ) : (
          <div className="reviews">
            {reviews.length !== 0 ? (
              <ul>
                {reviews.map(({ author, id, content }) => (
                  <li key={id}>
                    <h2>{author}</h2>
                    <p>{content}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>There is no reviews for this movie</p>
            )}
          </div>
        )}
      </>
    );
  }
}

export default Revievs;
