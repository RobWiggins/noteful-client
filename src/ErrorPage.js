import React from 'react';

export default class ErrorPage extends React.Component {
  state={
    error: null,
  }

  static getDerivedStateFromError(error) {
    return {error};
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>There has been an Error!</h1>
          <p>We're sorry but if you refresh all should be well!</p>
        </div>
      );
    }
    return this.props.children;
  }
}