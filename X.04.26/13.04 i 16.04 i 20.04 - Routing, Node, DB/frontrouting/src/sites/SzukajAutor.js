import React from "react";
import { useNavigate } from 'react-router-dom';
import KsiazkiLista from "../components/KsiazkiLista";

function ksiazkiAutoraUrl(imieA, nazwiskoA) {
  const baseURL = 'http://localhost:3100/api/ksiazkiAutora';
  const parametry = {
    imie: imieA,
    nazwisko: nazwiskoA
  }

  const adresZap = new URLSearchParams(parametry).toString();

  const url = `${baseURL}?${adresZap}`;
  return url;
}

function pobierzKsiazkiAutor(imieA, nazwiskoA, setKsiazki) {
  const url = ksiazkiAutoraUrl(imieA, nazwiskoA);
  fetch(url)
    .then((resp) => (
      resp.json()
    ))
    .then((json_data) => {
      console.log('DATA: ', json_data.wynik);
      setKsiazki(
        json_data.wynik
      );
    }
    )
    .catch((error) => console.log(error));
}



function Szukaj_autor() {

  const [autor, setAutor] = React.useState({
    imie: "",
    nazwisko: ""
  });
  const [loading, setLoading] = React.useState(true);
  const [ksiazki, setKsiazki] = React.useState([]);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const onChangeDane = event => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    setAutor((prevState) => ({
      ...prevState,
      [inputName]: inputValue
    }
    ));
  }

  const submitHandler = event => {
    event.preventDefault();
    if ((autor.imie==null)||(autor.nazwisko==null)){
        alert("Prosze uzupelnic dane")
      }
    else{
    pobierzKsiazkiAutor(autor.imie, autor.nazwisko, setKsiazki);
    setLoading(false);
    }
  }

  return (
    <div>
      <h3>Szukanie autora: </h3>
      <form onSubmit={submitHandler}>
        Imie:
        <input
          name="imie"
          type="text"
          value={autor.imie}
          onChange={onChangeDane}
          required
        /> <br />
        Nazwisko:
        <input
          name="nazwisko"
          type="text"
          value={autor.nazwisko}
          onChange={onChangeDane}
          required
        /><br />
        <input type="submit" value="Szukaj" />
      </form>
      
      {(loading) ? "jeszcze nie wyslane" : <KsiazkiLista ksiazki={ksiazki}/>}
      <br/><br/>
      <button onClick={goToHome}>Strona startowa</button>
    </div>
  );


}

export default Szukaj_autor;
