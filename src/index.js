import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import ProgressBar from './components/progress_bar';
import Target from './components/target';


class App extends Component {
  constructor () {
    super ()

    this.state = {
      donations: 0
    }
  }

  render () {

    return (
      <div>
        <div className='target'>
          <Target />
        </div>
        <div className='bar'>
          <ProgressBar />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
