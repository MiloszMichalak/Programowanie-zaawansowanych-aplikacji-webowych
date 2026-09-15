// export default function Strona1() {
//     return (
//         <div>
//             <h3>Strona 1</h3>
//             <a href="/">Startowa</a>
//             <br />
//             <a href="/strona2">Strona 2</a>
//         </div>
//     );   
// }

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import KsiazkiLista from '../components/KsiazkiLista';


const Ksiazki = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    };

    const [ksiazki, setKsiazki] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('http://localhost:3100/api/ksiazki')
            .then((resp) => (
                resp.json()
            ))
            .then((json_data) => {
                console.log('DATA: ', json_data.wynik);
                setKsiazki(
                    json_data.wynik
                );
                setLoading(false);
            }
            )
            .catch((error) => console.log(error));


    }, []);
    if (loading) return (<p>Loading...</p>);


    return (
        <div>
            <h3>Ksiazki</h3>
            <KsiazkiLista ksiazki={ksiazki}/>
            <button onClick={goToHome}>Strona startowa</button>
        </div>
    );
};

export default Ksiazki;
