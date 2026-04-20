import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './navigation/Home';
import Ksiazki from './sites/Ksiazki';
import Autorzy from './sites/Autorzy';
import SzukajAutor from "./sites/SzukajAutor"

export default function App() {
  return (
	<BrowserRouter>
	  <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/autorzy" element={<Autorzy />} />
		<Route path="/ksiazki" element={<Ksiazki />} />
		<Route path='/autor' element={<SzukajAutor/>}/>
	  </Routes>
	</BrowserRouter>
  );
}
