import './App.css';
import fibo from './assets/fibo.png'
import { useState } from 'react';

function fib(n) {
  if (n < 1) return [];
  let current = 1, previous = 0;
  const sequence = [1];

  for (let i = 1; i < n; i++) {
    const temp = current;
    current += previous;
    previous = temp;
    sequence.push(current);
  }

  return sequence;
}


function multiplyFib(arr) {
  let product = 1;
  arr.forEach(element => {
    product *= element;
  });

  return product;
}

export default function App() {
  const [n, setN] = useState(0);
  const [result, setResult] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Obliczanie iloczynu n elementow ciagu Fibonacciego</h1>
        <img src={fibo} alt="logo" />
        <input type='number' onChange={e => setN(parseInt(e.target.value))} placeholder='Podaj n'/>
        <input type='button' onClick={() => setResult(fib(n))} value='Oblicz'/>
        <p>N elementow fibo: {result.join(" * ")}</p>
        <p>Iloczyn: {multiplyFib(result)}</p>
      </header>
    </div>
  );
}
