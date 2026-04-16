import { useNavigate } from "react-router-dom";

export default function Startowa() {
    const navigate = useNavigate();

    // lub
    /* const goToStrona1 = () => {
        navigate('/strona1');
    }; */
    // <button onClick={goToStrona1}>Strona 2</button>

    return (
        <div>
            <h1>Startowa</h1>
            <button onClick={() => navigate('/ksiazki')}>Książki</button>
            <button onClick={() => navigate('/autorzy')}>Autorzy</button>
        </div>
    );
}
