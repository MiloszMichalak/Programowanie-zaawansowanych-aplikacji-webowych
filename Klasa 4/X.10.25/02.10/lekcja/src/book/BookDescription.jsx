import './Book.css'
import { Component } from 'react'
import Header from "./Header";
import Footer from "./Footer";

export default class BookDescription extends Component {
    constructor(props){
        super(props);
        this.state = {
            book: [
                {id: 0, title: "Hobbit", author: "J. R. Rolkien", pages: "300"},
                {id: 1, title: "Wladca pierscieni", author: "J. R. Rolkien", pages: "900"},
                {id: 2, title: "Wladca much", author: "W.Godlnig", pages: "250"},
            ]
        };
    }
    render() {
        return(
            <div className='App'>
                {this.state.book.map((item) => (
                    <ol>
                        <h1>tytul: {item.title}</h1>
                        <p>autor: {item.author}</p>
                        <p>ilosc stron: {item.pages}</p>
                    </ol>
                ))}
            </div>
        );
    }
}
