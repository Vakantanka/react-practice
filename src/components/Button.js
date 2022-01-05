import React, { Component } from 'react';
import "./button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.message,
			pointer: 0
    };
    this.changeText = this.changeText.bind(this);
  }

	changeText() {
		this.setState({label: this.props.message[this.state.pointer]});
		// ide kéne, hogy változzon meg a TargetDiv állapota, de fingom nincs, hogyan
		// <TargetDiv message={this.props.message[this.state.pointer]} />
		
		if (this.state.pointer < this.props.message.length-1) {
			this.setState({pointer: this.state.pointer + 1});
		} else {
			this.setState({pointer: 0});
		}

	}
	
	render() {
		return (
			<button>{this.state.label}</button>
		);
	}

}

export default Button;
