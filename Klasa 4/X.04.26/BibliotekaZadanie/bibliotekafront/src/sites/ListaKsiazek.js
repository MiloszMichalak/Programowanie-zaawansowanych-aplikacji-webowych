import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListaKsiazek() {
    const navigate = useNavigate();
    const [ksiazki, setKsiazki] = useState([]);
    const [loading, setLoading] = useState(true);
    const [komunikat, setKomunikat] = useState("Czekam na dane z serwera...");

    useEffect(() => {
        fetch('http://localhost:3100/ksiazki')
            .then((resp) => (
                resp.json()
            ))
            .then((json_data) => {
                setKsiazki(json_data.wynik);
                setLoading(false);

                if (!json_data.wynik || json_data.wynik.length === 0) {
                    setKomunikat("Czekam na dane z serwera...");
                } else {
                    setKomunikat("");
                }
            })
            .catch((error) => {
                console.log(error);
                setKsiazki([]);
                setLoading(false);
                setKomunikat("Czekam na dane z serwera...");
            });
    }, []);

    return (
        <div className="page">
            <h2 className="title">Lista ksiazek</h2>

            <button className="back" onClick={() => navigate('/')}>Strona startowa</button>

            <div className="content">
                {loading || ksiazki.length === 0 ? (
                    <p>{komunikat}</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Imie</th>
                                <th>Nazwisko</th>
                                <th>Tytul</th>
                                <th>Cena</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ksiazki.map((ksiazka, index) => (
                                <tr key={index}>
                                    <td>{ksiazka.imie}</td>
                                    <td>{ksiazka.nazwisko}</td>
                                    <td>{ksiazka.tytul}</td>
                                    <td>{ksiazka.cena}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
