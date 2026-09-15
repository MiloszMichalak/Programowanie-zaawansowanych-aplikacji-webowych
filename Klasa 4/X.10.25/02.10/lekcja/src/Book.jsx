import './Book.css'
import Header from "./Header";
import Footer from "./Footer";

const book = [
  {id: 0, title: "Hobbit", author: "J. R. Rolkien", pages: "300"},
  {id: 1, title: "Wladca pierscieni", author: "J. R. Rolkien", pages: "900"},
  {id: 2, title: "Wladca much", author: "W.Godlnig", pages: "250"},
]

export default function Book() {
  return (
    <div className='App'>
    <Header name="Uniwersytetu Adama Mickiewiczia" city="Poznaniu"/>
      {book.map((item) => (
        <ol>
          <h1>tytul: {item.title}</h1>
          <p>autor: {item.author}</p>
          <p>ilosc stron: {item.pages}</p>
        </ol>
      ))}
      <Footer/>
    </div>
  )
}
