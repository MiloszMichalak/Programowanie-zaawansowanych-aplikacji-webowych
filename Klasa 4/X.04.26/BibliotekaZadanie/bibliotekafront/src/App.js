import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './sites/Home';
import Czytelnicy from './sites/Czytelnicy';
import Wypozyczenia from './sites/Wypozyczenia';
import WstawAutora from './sites/WstawAutora';
import WstawKsiazke from './sites/WstawKsiazke';
import ListaAutorow from './sites/ListaAutorow';
import ListaKsiazek from './sites/ListaKsiazek';
import Header from './components/Header';

function App() {
  	return (
	    <div className="app">
		<Header name="Biblioteka powiatowa w Garwolinie" />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/listaCzytelnikow" element={<Czytelnicy />} />
				<Route path="/wypozyczeniaCzytelnika" element={<Wypozyczenia />} />
				<Route path="/wstawAutora" element={<WstawAutora />} />
				<Route path="/wstawKsiazke" element={<WstawKsiazke />} />
				<Route path="/listaAutorow" element={<ListaAutorow />} />
				<Route path="/listaKsiazek" element={<ListaKsiazek />} />
			</Routes>
	  	</BrowserRouter>
    </div>
  );
}

export default App;
