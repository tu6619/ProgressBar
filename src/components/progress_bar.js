import React, { Component } from 'react';
import { Col, ProgressBar, Panel, Button, ButtonGroup } from 'react-bootstrap';

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

  donateFivePounds() {
    let now = this.state.donations
    this.setState({
      donations: now + 5
    });
  };

  donateTenPounds() {
    let now = this.state.donations
    this.setState({
      donations: now + 10
    });
  };

  targetReached() {
    let moneyLeft = 100 - this.state.donations;
    if (moneyLeft > 0) {
      return <h3>You need £{moneyLeft} more to reach your target.</h3>
    } else {
      return <h3>Target reached!</h3>
    }
  }

  render() {

    return (
      <div>
        <div>
          <div className='grid'>
            <Col xs={12} sm={12} md={12} lg={12}>
              <ProgressBar
                active
                now={this.state.donations}
                label={`£${this.state.donations}`}
                />
              <div className='donations-left'>
                <Panel bsStyle='info'>{this.targetReached()}</Panel>
              </div>
            </Col>
          </div>
        </div>
        <div className='button-group'>
          <ButtonGroup justified>
            <Button bsSize='large' bsStyle='success' href='#' onClick={this.donateOnePound.bind(this)} disabled={this.state.donations >= 100 ? true : false}>DONATE £1</Button>
            <Button bsSize='large' bsStyle='success' href='#' onClick={this.donateFivePounds.bind(this)} disabled={this.state.donations >= 100 ? true : false}>DONATE £5</Button>
            <Button bsSize='large' bsStyle='success' href='#' onClick={this.donateTenPounds.bind(this)} disabled={this.state.donations >= 100 ? true : false}>DONATE £10</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default Bar;
