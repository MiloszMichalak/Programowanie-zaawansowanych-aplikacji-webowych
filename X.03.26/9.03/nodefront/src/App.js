import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState({message: null, name: null, email: null});
	useEffect(() => {
		const osoba = { name: "Jan Kowalski", email: "jan.kowalski@example.com" };

		fetch('http://localhost:3100/api/data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(osoba)
		})
		.then((response) => response.json())
		.then((data) => {
			setData(
				{
					message: data.message, 
					name: data.zwrot.name,
					email: data.zwrot.email
				}
			)
		}).catch( (error) => console.log(error));
	}, []);
  

    return (
    	<div className="App">
        	<h3>Odpowiedz od serwera: {data.message} {data.name} {data.email}</h3>
    	</div>
  	);
}

export default App;
