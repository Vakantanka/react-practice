import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';
import TargetDiv from './components/TargetDiv';
import TargetDivWithMap from './components/TargetDivWithMap';
import Profile from './components/Profile';
import Profile2 from './components/Profile2';
import Profile3 from './components/Profile3';
import Profile4 from './components/Profile4';

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
        <Profile4 />
        <Button label="Click me!" handleChange={this.handleChange} />
        <TargetDiv text={this.state.text} />
        <TargetDivWithMap text={szoveg} />
        <Profile />
        <Profile2 />
        <Profile3 />
      </header>
    </div>
    )
  }
}

export default App;
