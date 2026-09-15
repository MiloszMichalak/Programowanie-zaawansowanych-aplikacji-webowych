import './App.css';
import TextInput from './inputs/TextInput';
import dowolny from "./assets/dowolny.png";
import ostrokatny from "./assets/ostrokatny.png";
import rozwartokatny from "./assets/rozwartokatny.png";
import prostokatny from "./assets/prostokatny.png";
import rownoboczny from "./assets/rownoboczny.png";
import rownoramienny from "./assets/rownoramienny.png";
import { useState } from 'react';

function App() {
	const options = [
		{ id: 0, text: "Prosze wybrac rodzaj danych"},
		{ id: 1, text: "Boki"},
		{ id: 2, text: "Kąty"}
	]

	const [state, setState] = useState({
		type: 0,
		value1: "",
		value2: "",
		value3: "",
		outputType: "",
		outputInfo: ""
	});

	const triangleImages = [
		{ type: "dowolny", image: dowolny },
		{ type: "ostrokatny", image: ostrokatny },
		{ type: "rozwartokatny", image: rozwartokatny },
		{ type: "prostokatny", image: prostokatny },
		{ type: "rownoboczny", image: rownoboczny },
		{ type: "rownoramienny", image: rownoramienny },
    ];

	function getTriangleImage(type) {
		const triangle = triangleImages.find((triangle) => triangle.type === type);
		return triangle ? triangle.image : null;
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setState((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	function handleSubmit(event) {
		event.preventDefault();
		
		if (state.type === 0){
			alert("Prosze okreslic rodzaj danych")
			return;
		}

		doSerwera();
	}

	function doSerwera() {
		const dataToServer = { type: state.type, value1: state.value1, value2: state.value2, value3: state.value3 };
		fetch('http://localhost:3100/math/check/triangle', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataToServer)
		})
		.then(response => response.json())
		.then((json_data) => setState((prevState) => ({ ...prevState, outputType: json_data.type, outputInfo: json_data.info })))
		.catch(error => {
			console.error('Error:', error);
		});
	}

    return (
    	<div className="App">
			<h1>Sprawdzamy trojkaty</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='type'>Prosze okreslic rodzaj danych: </label>
				<select name="type" onChange={handleChange}>
					{options.map((option) => (
						<option key={option.id} value={option.id}>
							{option.text}
						</option>
					))}
				</select>

				<TextInput label="Prosze podac pierwsza wartosc" name="value1" value={state.value1} onChange={handleChange}/>
				<TextInput label="Prosze podac druga wartosc" name="value2" value={state.value2} onChange={handleChange}/>
				<TextInput label="Prosze podac trzecia wartosc" name="value3" value={state.value3} onChange={handleChange}/>

				<button type="submit">Sprawdz</button>
			</form>

			{state.outputType && (
				<div>
					<h2>{state.outputInfo}</h2>
				</div>
      		)}

			{getTriangleImage(state.outputType) && (
				<div>
					<img src={getTriangleImage(state.outputType)} alt={state.outputType} />
				</div>
			)}

			<p>Zapraszamy ponownie</p>
    	</div>
    );
}

export default App;
