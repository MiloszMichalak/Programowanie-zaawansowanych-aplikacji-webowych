import { useState } from 'react'
import TrojkatGrafika from './grafika/trojkat.png'

export default function Trojkat(){
    const [boki, setBoki] = useState({ a: '', b: '', c: '' })
    const [wynik, setWynik] = useState(null)

    function oblicz(event){
        event.preventDefault()

        const [a, b, c] = [Number(boki.a), Number(boki.b), Number(boki.c)]
        const posortowaneBoki = [a, b, c].sort((x, y) => x - y)

        if (posortowaneBoki[0] + posortowaneBoki[1] <= posortowaneBoki[2]){
            setWynik({
                rodzaj: 'brak trójkąta',
                pole: 'nie ma trójkąta',
                obwod: 'nie ma trójkąta'
            })
            return
        }

        const [najkrotszy, srodkowy, najdluzszy] = posortowaneBoki
        const prostokatny = najkrotszy ** 2 + srodkowy ** 2 === najdluzszy ** 2

        let rodzaj = 'inny trójkąt'
        if (prostokatny){
            rodzaj = 'trójkąt prostokątny'
        } else if (a === b && b === c){
            rodzaj = 'trójkąt równoboczny'
        } else if (a === b || a === c || b === c){
            rodzaj = 'trójkąt równoramienny'
        }

        const polobwod = (a + b + c) / 2
        const pole = Math.sqrt(polobwod * (polobwod - a) * (polobwod - b) * (polobwod - c))

        setWynik({
            rodzaj,
            pole: pole,
            obwod: a + b + c
        })
    }

    return (
        <div>
            <img src={TrojkatGrafika} alt='trojkat'/>

            <form onSubmit={oblicz}>
                <label htmlFor='a'>A:</label>
                <input min={0} type='number' id='a' value={boki.a} onChange={event => setBoki({ ...boki, a: event.target.value })}/>
                <br/>
                <label htmlFor='b'>B:</label>
                <input min={0} type='number' id='b' value={boki.b} onChange={event => setBoki({ ...boki, b: event.target.value })}/>
                <br/>
                <label htmlFor='c'>C:</label>
                <input min={0} type='number' id='c' value={boki.c} onChange={event => setBoki({ ...boki, c: event.target.value })}/>

                <p id='rodzaj'>{wynik && `Rodzaj trójkąta: ${wynik.rodzaj}`}</p>
                <p id='pole'>{wynik && `Pole trójkąta: ${wynik.pole}`}</p>
                <p id='obwod'>{wynik && `Obwód trójkąta: ${wynik.obwod}`}</p>

                <input type='submit' value='licz'/>
            </form>
        </div>
    )
}
