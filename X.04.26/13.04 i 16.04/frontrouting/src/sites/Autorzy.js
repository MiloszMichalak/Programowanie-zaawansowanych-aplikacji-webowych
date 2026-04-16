// import { Link } from "react-router-dom";

// export default function Strona2() {
//     return (
//         <div>
//             <h3>Strona 2</h3>
//             <Link to ="/">Startowa</Link>
//             <br />
//             <Link to ="/strona1">Strona 1</Link>
//         </div>
//     );    
// }

import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Autorzy() {
  const [autorzy, setAutorzy] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    fetch('http://localhost:3100/api/data')
      .then((resp) => (
        resp.json()
      ))
      .then((json_data) => {
        console.log('DATA: ', json_data.wynik);
        setAutorzy(
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
      <h3>odpowiedz od serwera: </h3>
      <ol>
        {autorzy.map((autor, index) => (
          <li key={autor.IDautor}>
            {autor.imie} {autor.nazwisko}
          </li>

        ))
        }
      </ol>
      <button onClick={goToHome}>Strona startowa</button>
    </div>);


}

export default Autorzy;
