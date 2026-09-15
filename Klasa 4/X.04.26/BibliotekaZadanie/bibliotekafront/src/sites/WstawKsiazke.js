import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../components/TextField";

export default function WstawKsiazke() {
    const navigate = useNavigate();
    const [autorzy, setAutorzy] = useState([]);
    const [idAutora, setIdAutora] = useState("");
    const [tytul, setTytul] = useState("");
    const [cena, setCena] = useState("");
    const [dataZakupu, setDataZakupu] = useState("");
    const [komunikat, setKomunikat] = useState("Czekam na dane z serwera");
    const [loadingAutorzy, setLoadingAutorzy] = useState(true);
    const [loadingZapis, setLoadingZapis] = useState(false);
    const [czyDodano, setCzyDodano] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3100/autorzy')
            .then((resp) => resp.json())
            .then((json_data) => {
                setAutorzy(json_data.wynik);

                if (json_data.wynik && json_data.wynik.length > 0) {
                    setIdAutora(String(json_data.wynik[0].IDautor));
                    setKomunikat("");
                } else {
                    setKomunikat("Czekam na dane z serwera");
                }

                setLoadingAutorzy(false);
            })
            .catch((error) => {
                console.log(error);
                setKomunikat("Czekam na dane z serwera");
                setLoadingAutorzy(false);
            });
    }, []);

    const handleWstaw = (event) => {
        event.preventDefault();

        if (!idAutora) {
            setKomunikat("Prosze wybrac autora");
            setCzyDodano(false);
            return;
        }

        if (!tytul.trim()) {
            setKomunikat("Prosze podac tytul");
            setCzyDodano(false);
            return;
        }

        if (!cena.trim()) {
            setKomunikat("Prosze podac cene");
            setCzyDodano(false);
            return;
        }

        if (!dataZakupu.trim()) {
            setKomunikat("Prosze podac date zakupu");
            setCzyDodano(false);
            return;
        }

        setKomunikat("");
        setCzyDodano(false);
        setLoadingZapis(true);

        fetch('http://localhost:3100/ksiazki', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idAutora,
                tytul,
                cena,
                dataZakupu
            })
        })
            .then((resp) => resp.json())
            .then((json_data) => {
                if (json_data.wynik === 0) {
                    const wybranyAutor = autorzy.find((autor) => String(autor.IDautor) === String(idAutora));
                    const opisAutora = wybranyAutor ? `${wybranyAutor.imie} ${wybranyAutor.nazwisko}` : "wybrany autor";

                    setCzyDodano(true);
                    setKomunikat(`Ksiazka: autor: ${opisAutora}, tytul: ${tytul}, cena: ${cena}, data zakupu: ${dataZakupu} zostala dodana do bazy danych`);
                } else {
                    setCzyDodano(false);
                    setKomunikat("Nie udalo sie dodac ksiazki");
                }

                setLoadingZapis(false);
            })
            .catch((error) => {
                console.log(error);
                setCzyDodano(false);
                setKomunikat("Wystapil blad podczas dodawania ksiazki");
                setLoadingZapis(false);
            });
    };

    if (loadingAutorzy || autorzy.length === 0) {
        return (
            <div className="page">
                <h2 className="title">Wstawianie ksiazki</h2>

                <button className="back" onClick={() => navigate('/')}>Strona startowa</button>

                <div className="content">
                    <p>{komunikat}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <h2 className="title">Wstawianie ksiazki</h2>

            <button className="back" onClick={() => navigate('/')}>Strona startowa</button>

            <div className="content">
                {czyDodano ? (
                    <p>{komunikat}</p>
                ) : (
                    <form onSubmit={handleWstaw}>
                        <div>
                            <label htmlFor="autor">Autor</label>
                            <select
                                id="autor"
                                value={idAutora}
                                onChange={(event) => setIdAutora(event.target.value)}
                            >
                                {autorzy.map((autor) => (
                                    <option key={autor.IDautor} value={autor.IDautor}>
                                        {autor.imie} {autor.nazwisko}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <TextField
                            label="Tytul"
                            id="tytul"
                            value={tytul}
                            onChange={(event) => setTytul(event.target.value)}
                        />

                        <div>
                            <label htmlFor="cena">Cena</label>
                            <input
                                id="cena"
                                type="number"
                                value={cena}
                                min="0"
                                onChange={(event) => setCena(event.target.value)}
                            />
                        </div>

                        <TextField
                            label="Data zakupu"
                            id="dataZakupu"
                            value={dataZakupu}
                            placeholder="RRRR-MM-DD"
                            onChange={(event) => setDataZakupu(event.target.value)}
                        />

                        <button type="submit" disabled={loadingZapis}>
                            Wstaw ksiazke
                        </button>
                    </form>
                )}

                {!czyDodano && komunikat && <p>{komunikat}</p>}
                {loadingZapis && <p>Ladowanie danych...</p>}
            </div>
        </div>
    );
}
