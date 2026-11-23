import { useState } from 'react'
import prostokatny from "../grafika/prostokatny.png"
import ostrokatny from "../grafika/ostrokatny.png"
import rozwartokatny from "../grafika/rozwartokatny.png"

export default function Trojkat(){
    const [katy, setKaty] = useState({ kat1: '', kat2: '', kat3: '' })
    const [rodzaj, setRodzaj] = useState(null)
    const [grafika, setGrafika] = useState(null);

    function oblicz(event){
        event.preventDefault()

        const kat1 = Number(katy.kat1)
        const kat2 = Number(katy.kat2)
        const kat3 = Number(katy.kat3)

        if (kat1 <= 0 || kat2 <= 0 || kat3 <= 0 || ((kat1 + kat2 + kat3) !== 180)){
            setRodzaj('brak trójkata')
            return;
        }

        if (kat1 === 90 || kat2 === 90 || kat3 === 90){
            setRodzaj('trójkąt prostokątny')
            setGrafika(prostokatny)
        } else if (kat1 > 90 || kat2 > 90 || kat3 > 90){
            setRodzaj('trójkąt rozwartokątny')
            setGrafika(rozwartokatny)
        } else if (kat1 < 90 && kat2 < 90 && kat3 < 90){
            setRodzaj('trójkąt ostrokątny')
            setGrafika(ostrokatny)
        }
    }

    return (
        <div>
            <h1>Sprawdzanie trojkata</h1>
            <form onSubmit={oblicz}>
                <label htmlFor='kat1'>Kąt A:</label>
                <input min={0} type='number' id='kat1' value={katy.kat1} onChange={event => setKaty({ ...katy, kat1: event.target.value })}/>
                <br/>
                <label htmlFor='kat2'>Kąt B:</label>
                <input min={0} type='number' id='kat2' value={katy.kat2} onChange={event => setKaty({ ...katy, kat2: event.target.value })}/>
                <br/>
                <label htmlFor='kat3'>Kąt C:</label>
                <input min={0} type='number' id='kat3' value={katy.kat3} onChange={event => setKaty({ ...katy, kat3: event.target.value })}/>

                <p id='rodzaj'>{rodzaj && `Rodzaj trójkąta: ${rodzaj}`}</p>

                <input type='submit' value='licz'/>
                <br/>
                {grafika && 
                <img src={grafika} alt='zdjecie trojkata'></img>
                }   
            </form>
        </div>
    )
}
