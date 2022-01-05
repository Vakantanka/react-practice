import React, { Component } from 'react';
import "./button.css";

class Button extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.handleChange();
	}	
	
	render() {
		return (
			<button onClick={this.handleChange} >{this.props.label}</button>
		);
	}

}

export default Button;
