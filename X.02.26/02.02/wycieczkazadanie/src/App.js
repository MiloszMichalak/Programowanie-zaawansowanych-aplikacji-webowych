import './App.css';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';
import TextInput from './inputs/TextInput';
import poznan from './assets/poznan.jpg';
import wroclaw from './assets/wroclaw.jpeg';
import krakow from './assets/krakow.jpeg';
import mapa from './assets/mapa.jpg';
import React, { useState } from 'react';


function App() {
  	const options = [
    	{ id: 0, name: '---', price: 300 },
    	{ id: 1, name: 'Poznan', price: 400 }, 
    	{ id: 2, name: 'Wroclaw', price: 500 }, 
    	{ id: 3, name: 'Krakow', price: 600 }
  	]

	const feedings = [
		{ id: 0, name: 'wlasne', price: 0 }, 
    	{ id: 1, name: 'sniadania', price: 20 }, 
    	{ id: 2, name: 'pelne', price: 70 }
	]

	const images = {
		0: mapa,
		1: poznan,
		2: wroclaw,
		3: krakow
	};

	const [state, setState] = useState(
		{
			place: 0,
			peopleCount: "",
			transport: false,
			feeding: '',
			comments: "",
			price: 580,
			email: "",
			emailError: ""
		}
	)

	function valueChange(event){
		const { name, value, type, checked } = event.target;
		const newValue = type === 'checkbox' ? checked : value;
		setState(prev => {
			const newState = { ...prev, [name]: newValue };

			let price = 200;
			price += options.at(newState.place).price;
			price += Number(newState.peopleCount) * 220;
			price += newState.transport ? 0 : 80;
			price += feedings.at(newState.feeding).price;

			return { ...newState, price: price };
		});
	}

	function validateEmail(){
		if (!state.email.includes("@") || state.email === ''){
			setState(prev => ({
			...prev,
			emailError: "Bledny email"
		}));
		} else {
			setState(prev => ({
				...prev,
				emailError: ""
			}));
			const text = `Miejscowosc: ${options.at(state.place).name}
				\nIlosc osob: ${state.peopleCount === '' ? "brak danych" : state.peopleCount}
				\nDojazd: ${state.transport ? "Wlasny" : "Organizator"}
				\nWyzywienie: ${state.feeding === '' ? "Nie wybrano" : feedings.at(state.feeding).name}
				\nUwagi: ${state.comments === '' ? "Nie ma uwag" : state.comments}
				\nAdres email: ${state.email === '' ? "Adres nie zostal podany" : state.email}
				\nAktualna wartosc wycieczki: ${state.price}`;
		
			console.log(text);
			alert("Dziekujemy za zlozenie zamowanie, wszystkie informacje zostaly wyslane na adres: " + state.email)
		}
	}

  	return (
    	<div className="App">
      		<h1>Zapraszamy na wycieczke Twoich marzen</h1>
     		<h2>Prosze podac pelne dane:</h2>
			 <img src={images[state.place]} alt="Zdjecie miejsca docelowego" style={{ width: '300px', height: '200px' }}/>
      		<form>
        		<SelectInput 
					label="Miejsce proszę wybrać z listy" 
					name="place" 
					options={options} 
					value={state.place}
					onChange={valueChange} />
				<TextInput
					label="Ilosc osob"
					name="peopleCount"
					value={state.peopleCount}
					type="text"
					onChange={valueChange}
				/>
				<TextInput
					label="Prosze zaznaczyc w przypadku wlasnego transportu"
					name="transport"
					value={state.transport}
					type="checkbox"
					onChange={valueChange}
				/>
				<label htmlFor='feeding'>Prosze zaznaczyc sposob wyzywienia: </label>
				{
					feedings.map(feeding => (
						<TextInput
							label={feeding.name}
							name="feeding"
							value={feeding.id}
							type="radio"
							onChange={valueChange}
						/>		
					))
				}
				<TextAreaInput
					label="Uwagi do organizatora"
					name="comments"
					value={state.comments}
					onChange={valueChange}
				/>
				<TextInput
					label="Adres do wyslania oferty"
					name="email"
					value={state.email}
					type="text"
					onChange={valueChange}
				/>
				<input type='button' value="Zloz zamowienie" onClick={validateEmail}/>
      		</form>
			<ol>
				<li>Miejscowosc: {options.at(state.place).name}</li>
				<li>Ilosc osob: {state.peopleCount === '' ? "brak danych" : state.peopleCount}</li>
				<li>Dojazd: {state.transport ? "Wlasny" : "Organizator"}</li>
				<li>Wyzywienie: {state.feeding === '' ? "Nie wybrano" : feedings.at(state.feeding).name}</li>
				<li>Uwagi: {state.comments === '' ? "Nie ma uwag" : state.comments}</li>
				<li>Adres email: {state.email === '' ? "Adres nie zostal podany" : state.email}</li>
				{state.emailError !== '' && <p>{state.emailError}</p>}
				<li>Aktualna wartosc wycieczki: {state.price}</li>
			</ol>
   		</div>
  	);
}

export default App;
