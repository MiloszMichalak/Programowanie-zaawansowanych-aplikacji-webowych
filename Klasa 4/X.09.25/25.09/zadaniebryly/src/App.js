import './App.css';
import szescian from './assets/szescian.png'
import prostopadloscian from './assets/prostopadloscian.png'
import kula from './assets/kula.jpg'

function obliczPoleSzescianu(a){
  return 6 * Math.pow(a, 2);
}

function obliczPoleProstopadloscianu(a, b, h){
  return 2 * a * b + 2 * a * h + 2 * b * h;
}

function obliczPoleKuli(r){
 return 4 * Math.PI * Math.pow(r, 2);
}


function obliczObjetoscSzescianu(a){
  return Math.pow(a, 3);  
}

function obliczObjetoscProstopadloscianu(a, b, h){
    return a * b * h;
}

function obliczObjetoscKuli(r){
   return (4/3) * Math.PI * Math.pow(r, 3);
}


function changeValueToList(pole, objetosc) {
  return {"pole":pole, "objetosc":objetosc};
}

function getProperValue(name, lista){
  switch (name) {
    case "szescian":
      return changeValueToList(
        obliczPoleSzescianu(lista[0].wymiar), 
        obliczObjetoscSzescianu(lista[0].wymiar));
    case "prostopadloscian":
      return changeValueToList(
        obliczPoleProstopadloscianu(lista[0].wymiar, lista[1].wymiar, lista[2].wymiar), 
        obliczObjetoscProstopadloscianu(lista[0].wymiar, lista[1].wymiar, lista[2].wymiar));
    case "kula":
      return changeValueToList(
        obliczPoleKuli(lista[0].wymiar), 
        obliczObjetoscKuli(lista[0].wymiar));
    default:
      return "error";
  }
}


const bryly = [
  {"id":0,"nazwa":"szescian","ilustracja":szescian,
    "wzory":[
      {"id":0,"wzor":"V=a^3"},
      {"id":1,"wzor":"P=6a^2"},
    ],
    "wymiary": [
      {"id":0, "wymiar":2}
    ]
  },
  {"id":1,"nazwa":"prostopadloscian","ilustracja":prostopadloscian,
    "wzory":[
      {"id":0,"wzor":"V=a*b*h"},
      {"id":1,"wzor":"P=2*a*b+2*a*h+2*b*h"},
    ],
    "wymiary": [
      {"id":0, "wymiar":3},
      {"id":1, "wymiar":4},
      {"id":2, "wymiar":5},
    ]
  },
  {"id":2,"nazwa":"kula","ilustracja":kula,
    "wzory":[
      {"id":0,"wzor":"V=4/3*pi*r^3"},
      {"id":1,"wzor":"P=4*pi*r^2"},
    ],
    "wymiary": [
      {"id":0, "wymiar":4}
    ]
  },
];

export default function App() {
  return (
    <div className="App">
    <h1>Bryly</h1>
      <table>
        <thead>
          <tr>
            <th>BRYLA</th>
            <th>ILUSTRACJA</th>
            <th>WZORY</th>
            <th>PRZYKLAD</th>
          </tr>
        </thead>
        <tbody>
          { 
            bryly.map( (item, index) => (
              <tr key={item.id}>
                <td>
                  <p className='name'>{item.nazwa}</p>
                </td>
                <td>
                  <img src={item.ilustracja} alt='Zdjecie bryly'></img>
                </td>
                <td>
                  <p className='wzor'>
                    Objetosc: {item.wzory[0].wzor} <br></br>
                    Pole: {item.wzory[1].wzor}
                  </p>
                </td>
                <td>
                  <ol>
                    {
                      item.wymiary.map((itemW, index) => (
                        <li key={index} className='measurement'>Wymiar: {itemW.wymiar}</li>
                      ))
                    }
                    <p className='values'>
                    Pole: {getProperValue(item.nazwa, item.wymiary).pole} <br></br> 
                    Objetosc: {getProperValue(item.nazwa, item.wymiary).objetosc}</p>
                  </ol>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
