import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../components/TextField";

export default function Wypozyczenia() {
    const navigate = useNavigate();
    const [imie, setImie] = useState("");
    const [nazwisko, setNazwisko] = useState("");
    const [wypozyczenia, setWypozyczenia] = useState([]);
    const [komunikat, setKomunikat] = useState("");
    const [hasSzukano, setHasSzukano] = useState(false);

    const handleSzukaj = (event) => {
        event.preventDefault();

        if (!imie.trim()) {
            setKomunikat("Prosze podac imie czytelnika");
            setWypozyczenia([]);
            setHasSzukano(false);
            return;
        }

        if (!nazwisko.trim()) {
            setKomunikat("Prosze podac nazwisko czytelnika");
            setWypozyczenia([]);
            setHasSzukano(false);
            return;
        }

        setKomunikat("");   
        setHasSzukano(true);

        fetch('http://localhost:3100/czytelnicy/wypozyczenia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imie,
                nazwisko
            })
        })
            .then((resp) => resp.json())
            .then((json_data) => {
                setWypozyczenia(json_data.wynik);
            })
            .catch((error) => {
                console.log(error);
                setWypozyczenia([]);
            });
    };

    return (
        <div className="page">
            <h2 className="title">Wypozyczenia</h2>

            <button className="back" onClick={() => navigate('/')}>Strona startowa</button>

            <div className="content">
                <form onSubmit={handleSzukaj}>
                    <TextField
                        label="Imie"
                        id="imie"
                        value={imie}
                        onChange={(event) => setImie(event.target.value)}
                    />

                    <TextField
                        label="Nazwisko"
                        id="nazwisko"
                        value={nazwisko}
                        onChange={(event) => setNazwisko(event.target.value)}
                    />

                    <button type="submit">Szukaj</button>
                </form>

                {komunikat && <p>{komunikat}</p>}

                {hasSzukano && (
                    <table>
                        <thead>
                            <tr>
                                <th>Imie</th>
                                <th>Nazwisko</th>
                                <th>Tytul autora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wypozyczenia.map((pozycja, index) => (
                                <tr key={index}>
                                    <td>{pozycja.czytImie}</td>
                                    <td>{pozycja.czytNazwisko}</td>
                                    <td>{pozycja.tytul}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
