/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Icon extends Component {
  render() {
    const { type, className } = this.props;
    return (
      <>{React.createElement(type, { className })}</>
    );
  }
}

export default Icon;
