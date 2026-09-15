import './Book.css'
import { Component } from 'react'
import BookDescription from './BookDescription';
import Header from "./Header";
import Footer from "./Footer";

export default class BookClass extends Component {
    render() {
        return(
            <div className='App'>
                <Header name="Uniwersytetu Adama Mickiewicza" city="Poznaniu"/>
                <BookDescription/>
                <Footer/>
            </div>
        );
    }
}
