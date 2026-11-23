import { useState } from "react"

export default function Licznik(){
    const [licznik, setLicznik] = useState(0);

    return (
        <div>
            <p>{licznik}</p>
            <input type="button" value="-" onClick={() => setLicznik(licznik - 5)}/>
            <input type="button" value="+" onClick={() => setLicznik(value => value + 3)}/>
        </div>
    );
}
