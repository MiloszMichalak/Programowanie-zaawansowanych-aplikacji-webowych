const KsiazkiLista =(props)=>{
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Tytul</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {props.ksiazki.map((ksiazka, index) => (
                        <tr key={ksiazka.IDksiazka}>
                            <td>{ksiazka.imie} </td>
                            <td>{ksiazka.nazwisko}</td>
                            <td>{ksiazka.tytul}</td>
                            <td>{ksiazka.cena}</td>
                        </tr>

                    ))
                    }
                </tbody>
            </table>
           </div>
    );
};

export default KsiazkiLista;