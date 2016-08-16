import React, { Component } from 'react';
import { Col, Button, ButtonGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import ProgressBar from './components/progress_bar';


class App extends Component {

  render () {

    return (
      <div>
        <div className='grid'>
          <Col xs={4} md={4}>
          </Col>
          <Col className='bar' xs={10} md={4}>
            <ProgressBar />
          </Col>
          <Col xs={4} md={4}>
          </Col>
        </div>
        <div className='button-group'>
          <ButtonGroup justified>
            <Button bsSize='large' href='#'>Left</Button>
            <Button bsSize='large' href='#'>Middle</Button>
            <Button bsSize='large' href="#">Middle</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
