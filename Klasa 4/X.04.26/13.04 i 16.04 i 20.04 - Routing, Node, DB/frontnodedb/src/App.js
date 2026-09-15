import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [autorzy, setAutorzy] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("http://localhost:3100/api/data")
    .then((response) => response.json())
    .then((data) => {
      console.log('DATA: ', data.wynik);
      setAutorzy(data.wynik);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  if (loading) return (  <p>Loading...</p>);

  return (
  <div className="App">
  <h3>odpowiedz od serwera: </h3>
  <ol>
    {autorzy.map((autor, index)=>(
      <li key={autor.IDautor}>
        {autor.imie} {autor.nazwisko}
      </li>

    ))
    }
  </ol>

  </div>);
  

}

export default App;
