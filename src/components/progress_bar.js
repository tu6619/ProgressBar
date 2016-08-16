import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class Bar extends Component {

  render() {
    const now = 60;

    return (
      <div>
        <ProgressBar active now={now} label={`${now}%`} />
      </div>
    );
  }
}

export default Bar;
