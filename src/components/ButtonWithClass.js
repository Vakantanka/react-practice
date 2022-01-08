import { Component } from "react";

class ButtonWithClass extends Component {

    constructor() {
        super();
        this.state = {
            greeting: "Helló class",
            mainTitle: "Title Class"
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.mainTitle}</h1>
                <p>{this.state.greeting}</p>
                <button onClick={ () => this.setState({greeting: "Bye! Class Greeting"}) } >Click me class greeting!</button>
                <button onClick={ () => this.setState({mainTitle: "Bye! Class Title"}) } >Click me calss title!</button>
            </div>
        )
    }
    
}

export default ButtonWithClass;