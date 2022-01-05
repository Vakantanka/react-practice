import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';
import TargetDiv from './components/TargetDiv';

const szoveg = [
  "Kezdetben",
  "vala",
  "az",
  "ige."
]

// const changeTargetText = () => {
//   console.log("yes");
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "Kattincs",
			pointer: 0
    };
    this.changeText = this.changeTargetText.bind(this);
  }

  changeTargetText() {
    console.log("yes");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button message={szoveg[0]} onClick={this.changeTargetText} />
          <TargetDiv message={szoveg[0]} />
        </header>
      </div>
    );
  }
}


export default App;
