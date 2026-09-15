import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListaAutorow() {
    const navigate = useNavigate();
    const [autorzy, setAutorzy] = useState([]);
    const [loading, setLoading] = useState(true);
    const [komunikat, setKomunikat] = useState("Czekam na dane z serwera...");

    useEffect(() => {
        fetch('http://localhost:3100/autorzy')
            .then((resp) => (
                resp.json()
            ))
            .then((json_data) => {
                setAutorzy(json_data.wynik);
                setLoading(false);

                if (!json_data.wynik || json_data.wynik.length === 0) {
                    setKomunikat("Czekam na dane z serwera...");
                } else {
                    setKomunikat("");
                }
            })
            .catch((error) => {
                console.log(error);
                setAutorzy([]);
                setLoading(false);
                setKomunikat("Czekam na dane z serwera...");
            });
    }, []);

    return (
        <div className="page">
            <h2 className="title">Lista autorow</h2>

            <button className="back" onClick={() => navigate('/')}>Strona startowa</button>

            <div className="content">
                {loading || autorzy.length === 0 ? (
                    <p>{komunikat}</p>
                ) : (
                    <ol>
                        {autorzy.map((autor, index) => (
                            <li key={index}>
                                {autor.imie} {autor.nazwisko}
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    )
}
