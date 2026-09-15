import biblioteka from '../assets/biblioteka.jpg';

export default function Header(props) {
    return (
        <header className="header">
            <img src={biblioteka} alt="biblioteka"/>
            <h1>Witamy w systemie obslugi bibliotek</h1>
            <h2>Biblioteka: {props.name}</h2>
        </header>
    )
}
