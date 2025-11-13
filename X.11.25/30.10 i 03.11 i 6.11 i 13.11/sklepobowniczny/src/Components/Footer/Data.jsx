export default function Data() {
    const dzisiaj = new Date();
    const dzien = dzisiaj.getDate();
    const miesiac = dzisiaj.getMonth();
    const rok = dzisiaj.getFullYear();

    const nazwyDni = [
        "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"
    ]

    const nazwyMiesiecy = [
        "Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca",
        "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"
    ];
    
    return `Dzisiaj jest: ${nazwyDni[dzisiaj.getDay() - 1]} ${dzien} ${nazwyMiesiecy[miesiac]} ${rok} roku`;
}
