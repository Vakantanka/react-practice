import React, { Component } from 'react';

class TargetDiv extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: props.message
    }
  }

  render() {
    return (
        <div>{this.state.message}</div>
    );
  }
}

export default TargetDiv;
