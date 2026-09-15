import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.zwieksz = this.zwieksz.bind(this);
        this.zmniejsz = this.zmniejsz.bind(this);
        this.czysc = this.czysc.bind(this);
    }

    zwieksz() {
        this.setState((prevState) => (
            {
                count: prevState.count + 1
            }
        ));
    }

    zmniejsz() {
        this.setState((prevState) => (
            {
                count: prevState.count - 1
            }
        ))
    }

    czysc() {
        this.setState(
            {
                count: 0
            }
        )
    }

    render() {
        return (
            <>
                <h1>Licznik: {this.state.count}</h1>
                <button onClick={this.zwieksz}>Zwieksz</button>
                <button onClick={this.zmniejsz}>Zmniejsz</button>
                <button onClick={this.czysc}>Czysc</button>
            </>
        )
    }
}

export default Counter;
