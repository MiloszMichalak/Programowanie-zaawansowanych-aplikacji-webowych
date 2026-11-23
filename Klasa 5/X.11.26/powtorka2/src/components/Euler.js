import { useState } from 'react'

export default function Euler(){
    const [ciag, setCiag] = useState([])
    const [ilosc, setIlosc] = useState('')
    const [iloczyn, setIloczyn] = useState(null)

    function wypelnijTabele(){
        const nowyCiag = []
        const liczbaElementow = Number(ilosc)

        for (let n = 1; n <= liczbaElementow; n++){
            nowyCiag.push(n ** 2 - n + 41)
        }

        setCiag(nowyCiag)
        setIloczyn(null)
    }

    function obliczIloczyn(){
        if (ciag.length === 0){
            return
        }

        let wynik = 1
        ciag.forEach(element => {
            wynik *= element
        })
        setIloczyn(wynik)
    }
 
    return (
        <div>
            <h1>Wypisywanie ciagu Eulera</h1>
            <form>
                <label htmlFor='ilosc'>Ilość elementów: </label>
                <input min='1' step='1' type='number' id='ilosc' value={ilosc} onChange={event => setIlosc(event.target.value)}/>

                <p>Elementy ciągu:</p>
                {ciag.length === 0
                    ? <p>Ciąg pusty</p>
                    : <ol>
                        {ciag.map((element, index) => <li key={index}>{element}</li>)}
                      </ol>
                }

                <input type='button' value='Wypełnij tabelę' onClick={wypelnijTabele}/>
                <p>Iloczyn: {iloczyn === null ? 'jeszcze nie policzony' : iloczyn}</p>
                <input type='button' value='Oblicz iloczyn' onClick={obliczIloczyn}/>
            </form>
        </div>
    )
}
