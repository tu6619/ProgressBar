import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './components/progress_bar';


class App extends Component {

  render () {

    return (
      <div>
        <ProgressBar />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
