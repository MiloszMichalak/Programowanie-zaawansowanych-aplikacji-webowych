import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../components/TextField";

export default function WstawAutora() {
    const navigate = useNavigate();
    const [imie, setImie] = useState("");
    const [nazwisko, setNazwisko] = useState("");
    const [komunikat, setKomunikat] = useState("");
    const [loading, setLoading] = useState(false);
    const [czyDodano, setCzyDodano] = useState(false);

    const handleWstaw = (event) => {
        event.preventDefault();

        if (!imie.trim()) {
            setKomunikat("Prosze podac imie autora");
            setCzyDodano(false);
            return;
        }

        if (!nazwisko.trim()) {
            setKomunikat("Prosze podac nazwisko autora");
            setCzyDodano(false);
            return;
        }

        setKomunikat("");
        setCzyDodano(false);
        setLoading(true);

        fetch('http://localhost:3100/autorzy', {
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
                if (json_data.wynik === 0) {
                    setCzyDodano(true);
                    setKomunikat(`Autor: ${imie} ${nazwisko} zostal wstawiony do bazy danych`);
                } else {
                    setCzyDodano(false);
                    setKomunikat("Nie udalo sie dodac autora");
                }

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setKomunikat("Wystapil blad podczas dodawania autora");
                setLoading(false);
            });
    };

    return (
        <div className="page">
            <h2 className="title">Wstawianie autora</h2>

            <button className="back" onClick={() => navigate('/')}>Strona startowa</button>

            <div className="content">
                {czyDodano ? (
                    <p>{komunikat}</p>
                ) : (
                    <form onSubmit={handleWstaw}>
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

                        <button type="submit" disabled={loading}>
                            Wstaw
                        </button>
                    </form>
                )}

                {!czyDodano && komunikat && <p>{komunikat}</p>}
                {loading && <p>Ladowanie danych...</p>}
            </div>
        </div>
    )
}
