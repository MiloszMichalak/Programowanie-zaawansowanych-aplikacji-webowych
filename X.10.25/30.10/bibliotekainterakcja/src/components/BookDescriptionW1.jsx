const BookDescription = (props) => {
    return (
        <div>
            <h2>Tytul: {props.book.tytul}</h2>
            <h4>Autor: {props.book.autor}</h4>
            <h6>{props.book.stron} stron</h6>
            <hr/>
        </div>
    )
}

export default BookDescription;