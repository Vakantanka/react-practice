import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';
import TargetDiv from './components/TargetDiv';

const szoveg = [
  "Kezdetben",
  "vala",
  "az",
  "React"
]

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
      pointer: 0
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
    if (this.state.pointer < szoveg.length-1) {
			this.setState({pointer: this.state.pointer + 1});
		} else {
			this.setState({pointer: 0});
		}
    this.setState({text: szoveg[this.state.pointer]});
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <Button label="Click me!" handleChange={this.handleChange} />
        <TargetDiv text={this.state.text} />
      </header>
    </div>
    )
  }
}

export default App;
