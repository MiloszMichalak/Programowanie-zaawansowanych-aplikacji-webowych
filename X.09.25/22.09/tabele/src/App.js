import './App.css';
const list = [
{"imie":"adam","nazwisko":"KOWALSKI","wiek":"33"},
{"imie":"ALA", "nazwisko":"nowak","wiek":"32"},
{"imie":"Ola","nazwisko":"SteFAnowska","wiek":"4"}
];

function Pelnoletni(wiek) {
  return wiek >= 18 ? "Tak" : "Nie";
}

function FormatTekstu(napis) {
  return napis.charAt(0).toUpperCase() + napis.slice(1).toLowerCase();
}

export default function App() {
  return (
    <div className="App">
      <table cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          <th>IMIE</th>
          <th>NAZWISKO</th>
          <th>WIEK</th>
          <th>PELNOLETNI</th>
        </tr>
        </thead>
        <tbody>
          {
            list.map( (item, index) => (
              <tr key={index}>
                <td>{FormatTekstu(item.imie)}</td>
                <td>{FormatTekstu(item.nazwisko)}</td>
                <td>{item.wiek}</td>
                <td>{Pelnoletni(item.wiek)}</td>
              </tr>
             ) )
          }
        </tbody>
      </table>
    </div>
  );
}
