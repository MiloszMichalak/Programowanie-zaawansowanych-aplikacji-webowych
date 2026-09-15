import plusplus from '../assets/plusplus.png';
import pluszero from '../assets/pluszero.png';
import plusminus from '../assets/plusminus.png';
import minusplus from '../assets/minusplus.png';
import minuszero from '../assets/minuszero.png';
import minusminus from '../assets/minusminus.png';

export default function GraphicFunctionRepresentation(props) {
    const { a, delta } = props;
    if (a > 0 && delta > 0) {
        return <img src={plusplus} alt="A dodatnie Delta dodatnia" className="img-fluid" />;
    } else if (a > 0 && delta === 0) {
        return <img src={pluszero} alt="A dodatnie Delta rowna zero" className="img-fluid" />;
    } else if (a > 0 && delta < 0) {
        return <img src={plusminus} alt="A dodatnie Delta ujemna" className="img-fluid" />;
    } else if (a < 0 && delta > 0) {
        return <img src={minusplus} alt="A ujemne Delta dodatnia" className="img-fluid" />;
    } else if (a < 0 && delta === 0) {
        return <img src={minuszero} alt="A ujemne Delta rowna zero" className="img-fluid" />;
    } else if (a < 0 && delta < 0) {
        return <img src={minusminus} alt="A ujemne Delta ujemna" className="img-fluid" />;
    }
    return null;
}
