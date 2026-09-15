import { useNavigate } from "react-router-dom";

export default function Startowa() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h1 className="title">Strona Startowa</h1>

            <div className="cols">
                <section>
                    <p>Czytelnicy</p>
                    <button onClick={() => navigate('/listaCzytelnikow')}>Lista czytelników</button>
                    <button onClick={() => navigate('/wypozyczeniaCzytelnika')}>Sprawdzenie wypożyczeń czytelnika</button>
                </section>

                <section>
                    <p>Wstawianie danych</p>
                    <button onClick={() => navigate('/wstawAutora')}>Wstaw autora</button>
                    <button onClick={() => navigate('/wstawKsiazke')}>Wstaw książkę</button>
                </section>

                <section>
                    <p>Sprawdzanie danych</p>
                    <button onClick={() => navigate('/listaAutorow')}>Lista autorów</button>
                    <button onClick={() => navigate('/listaKsiazek')}>Lista książek</button>
                </section>
            </div>
        </div>
    );
}
