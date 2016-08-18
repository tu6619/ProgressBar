import React, { Component } from 'react';
import { Col, ProgressBar, Button, ButtonGroup } from 'react-bootstrap';

class Bar extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      donations: 0
    };
  };

  donateOnePound() {
    let now = this.state.donations
    this.setState({
      donations: now + 1
    });
  };

  donateTwoPounds() {
    let now = this.state.donations
    this.setState({
      donations: now + 2
    });
  };

  donateFivePounds() {
    let now = this.state.donations
    this.setState({
      donations: now + 5
    });
  };

  render() {

    return (
      <div>
        <div>
          <div className='grid'>
            <Col xs={1} sm={1} md={1} lg={1}>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <ProgressBar
                active
                now={this.state.donations}
                label={`${this.state.donations}%`}
                />
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
            </Col>
          </div>
        </div>
        <div className='button-group'>
          <ButtonGroup justified>
            <Button bsSize='large' href='#' onClick={this.donateOnePound.bind(this)} disabled={this.state.donations >= 100 ? true : false}>Donate £1</Button>
            <Button bsSize='large' href='#' onClick={this.donateTwoPounds.bind(this)} disabled={this.state.donations >= 100 ? true : false}>Donate £2</Button>
            <Button bsSize='large' href='#' onClick={this.donateFivePounds.bind(this)} disabled={this.state.donations >= 100 ? true : false}>Donate £5</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default Bar;
