import { Component } from "react";
import BookDescription from "./components/BookDescription";
import Header from "./components/Header";
import Footer from "./components/Footer";

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ksiazki:[
                {id: 101, tytul: "Hobbit", autor: "J. R. Tolkien", stron: "455"},
                {id: 102 ,tytul: "Rok 198", autor: "G. Orwell", stron: "300"},
                {id: 103, tytul: "Wladca Pierscieni", autor: "J. R. Tolkien", stron: "669"},
                {id: 104, tytul: "Stary czlowkiek i morze", autor: "E. Hemingway", stron: "226"}
            ]
        };
    }
    updateBooks = ()=>{
        this.setState({
            ksiazki:[
                {id:101, tytul: "Hobbit", autor: "J. R. Tolkien", stron: "455"},
                {id:103, tytul: "Wladca Pierscieni", autor: "J. R. Tolkien", stron: "669"},
            ]  
        });
    };

    addNewBook = () =>{
        this.setState(prevState =>(
            {
                ksiazki:
                [
                    ...prevState.ksiazki,
                    {id: prevState.ksiazki.length+1, 
                     tytul: "Nowy wspanialy swiat", 
                     autor: "A. Huxley", 
                     stron: "255"}
                ]
            }
        ));
    };

    deleteSingleBook = id => {
        this.setState({
            ksiazki: this.state.ksiazki.filter(function(book){
                return book.id !== id;
            }
            )
        });
    };

    render (){
        return(
            <div>
                <Header />
                <button onClick={this.updateBooks}>Pozostaw tylko ksiazki Tolkiena</button>
                <button onClick={this.addNewBook}>Dodaj nowa ksiazke</button>
                {this.state.ksiazki.map((book)=> (
                    <BookDescription 
                     key = {book.id} 
                     book ={book}
                     deleteBook={this.deleteSingleBook}
                    />
                )
                )}
                <Footer />
            </div>
        );
    }
}

export default Books;