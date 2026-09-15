import { Component } from "react";

export default class ClassDataInput extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <form>
                <h1>Witamy przy kasie</h1>
                <h2>Proszę podać dane do wysylki</h2>
                Imie: <input type="text" name="firstName" />
                Nazwisko: <input type="text" name="lastName" />
            </form>
        )
    }
}
