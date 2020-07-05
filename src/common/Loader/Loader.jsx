import React, { Component } from 'react';
import DefaultLoader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class Loader extends Component {
  render() {
    return (
      <DefaultLoader
        className="DefaultLoader"
        type="Oval"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }
}

export default Loader;
