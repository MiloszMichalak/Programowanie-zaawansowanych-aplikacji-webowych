import PropTypes from "prop-types"
const BookDescription = (props) => {
    return (
        <div>
            <h2>Tytul: {props.book.tytul}</h2>
            <h4>Autor: {props.book.autor}</h4>
            <h6>{props.book.stron} stron</h6>
            <button onClick={()=>props.deleteBook(props.book.id)}>Usun ksiazke</button>
            <hr/>
        </div>
    );
};

BookDescription.propTypes = {
    book: PropTypes.object.isRequired,
    deleteBook: PropTypes.func
};

BookDescription.defaultProps = {
    book: {
        tytul: "Tytul ksiazki", autor: "Autor ksiazki", stron: "Liczba stron"
    }
};

export default BookDescription;