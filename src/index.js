import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import ProgressBar from './components/progress_bar';


class App extends Component {

  render () {

    return (
      <div className='grid'>
        <Col xs={4} md={4}>
        </Col>
        <Col className='bar' xs={10} md={4}>
          <ProgressBar />
        </Col>
        <Col xs={4} md={4}>
        </Col>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
