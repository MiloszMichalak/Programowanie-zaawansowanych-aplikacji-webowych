import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Czytelnicy() {
    const navigate = useNavigate();
    const [czytelnicy, setCzytelnicy] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3100/czytelnicy')
            .then((resp) => (
                resp.json()
            ))
            .then((json_data) => {
                setCzytelnicy(
                    json_data.wynik
                );
                setLoading(false);
            }
            )
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });


    }, []);

    return (
        <div className="page">
            <h2 className="title">Czytelnicy</h2>

            <button className="back" onClick={() => navigate('/')}>Strona startowa</button>

            <div className="content">
                {loading ? (
                    <p>Czekam na odpowiedź serwera...</p>
                ) : (
                    <ol>
                        {czytelnicy.map((czytelnik, index) => (
                            <li key={index}>
                                {czytelnik.czytImie} {czytelnik.czytNazwisko}
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    )
}
