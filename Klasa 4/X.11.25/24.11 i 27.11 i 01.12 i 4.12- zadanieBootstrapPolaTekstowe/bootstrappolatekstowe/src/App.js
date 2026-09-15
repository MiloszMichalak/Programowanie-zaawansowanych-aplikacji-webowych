import { Col, Container, Row, Button } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import CustomInput from './components/CustomInput';
import Footer from './components/Footer';
import GraphicFunctionRepresentation from './components/GraphicFunctionRepresentation';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
	function validateInputs() {
		if ((isNaN(getA) || isNaN(getB) || isNaN(getC)) || (getA === 0)) {
			setErrorMessage("Wszystkie wartosci musza byc liczbami i a nie moze byc zerem ");
		} else {
			setErrorMessage("");
		}
	}

	function changeVisibilty() {
		if ((isNaN(getA) || isNaN(getB) || isNaN(getC)) || (getA === 0)) {
			setErrorMessage("Dalej podane zle dane, wszystkie wartosci musza byc liczbami i a nie moze byc zerem ")
		} else {
			setVisible(!getVisible);
		}
	}

	const [getA, setA] = useState(0);
	const [getB, setB] = useState(0);
	const [getC, setC] = useState(0);

	const [getErrorMessage, setErrorMessage] = useState("");
	const [getVisible, setVisible] = useState(false);
	const rozwiazania = obliczRozwiazania(getA, getB, getC);

	return (
		<Container>
			<Row className='mb-3'>
				<Header topic={"Rownanie kwadratowe"} />
			</Row>
			<Row className='card p-3 w-50 d-block m-auto border-2 border-info'>
				<Col className="card-body">
					<h3 className="text fw-bold fs-3 text-info">Postać ogólna</h3>
					<p className='fw-bold'>ax²+bx+c=0</p>
					<h5 className='fs-5 text-info'>Wyróżnik równania kwadratowego</h5>
					<p>Jesli <span className='text-danger fw-bolder fs-5'>Δ = b² - 4ac</span>&nbsp;=</p>
					<ul>
						<li>Δ &gt; 0 to równanie ma dwa rozwiązania x₁ = (-b-√Δ)/(2a) x₂ = (-b+√Δ)/(2a)</li>
						<li>Δ = 0 to równanie ma jedno rozwiązanie x₀ = -b/(2a)</li>
						<li>Δ &lt; 0 to równanie nie ma rozwiązania</li>
					</ul>
				</Col>
			</Row>
			<Row className='mt-3'>
				<Col>
					<h2 className='text-decoration-underline'>Przykladowe obliczenia</h2>
					<p className='text-danger fw-semibold fs-5'>{getErrorMessage}</p>
					<CustomInput
						name="a"
						label="Podaj a"
						value={getA}
						onChange={(e) => setA(e.target.value)}
						onBlur={() => validateInputs()}
					/>

					<CustomInput
						name="b"
						label="Podaj b"
						value={getB}
						onChange={(e) => setB(e.target.value)}
						onBlur={() => validateInputs()}
					/>

					<CustomInput
						name="c"
						label="Podaj c"
						value={getC}
						onChange={(e) => setC(e.target.value)}
						onBlur={() => validateInputs()}
					/>

					<p className="fs-4 mt-3">Rownanie o postaci</p>
					<p className='text-danger fs-5 fw-bolder'>{getA}x²+{getB}x+{getC}=0</p>
					<Button onClick={changeVisibilty} className='btn mb-2'>Oblicz</Button>

					{getVisible && (
						<Col className='fs-6 fw-bold text-success'>
							<p>Delta wynosi: {obliczDelte(getA, getB, getC)}</p>
							{rozwiazania ? (
								Object.keys(rozwiazania).map((key) => (
									<p key={key}>{key} = {rozwiazania[key]}</p>
								))
							) : (
								<p>Rownanie nie ma rozwiazan w zbiorze liczb rzeczywistych</p>
							)}
						</Col>
					)}
				</Col>
				<Col className='text-center'>
					<h2 className="text-decoration-underline">Interpretacja graficzna</h2>
					{getVisible && <GraphicFunctionRepresentation a={getA} delta={obliczDelte(getA, getB, getC)} />}
				</Col>
			</Row>
			<Row className="text-center">
				<Footer kind={"równania kwadratowego"} />
			</Row>
		</Container>
	);
}

function obliczDelte(a, b, c) {
	return b * b - 4 * a * c;
}

function obliczRozwiazania(a, b, c) {
	const delta = obliczDelte(a, b, c);
	if (delta > 0) {
		const x1 = (-b - Math.sqrt(delta)) / (2 * a);
		const x2 = (-b + Math.sqrt(delta)) / (2 * a);
		return { x1, x2 };
	} else if (delta === 0) {
		const x0 = -b / (2 * a);
		return { x0 };
	}
	else return null;
}

