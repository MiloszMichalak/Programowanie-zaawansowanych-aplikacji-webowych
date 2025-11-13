import PropTypes from "prop-types";
import styles from "./ItemCard.module.css"
import { useState } from "react";

export default function ItemCard(props){
    const [itemCount, setItemCount] = useState(props.count)

    const updateCount = (newCount) => {
        setItemCount(newCount)
        props.onCountChange(props.id, newCount)
    }

    const handleSell = () => {
        updateCount(decreaseCount(itemCount))
    }

    const handleReceive = () => {
        const added = parseInt(prompt("Prosze podac ilosc par"))
        updateCount(itemCount + added)
    }

    return (
        <div className={styles.card}>
            <img src={props.image} alt={props.name} className={styles.image} />
            <div>
                <h2>Rodzaj: {props.name}</h2>
                <p>Stan magazynu: {itemCount}</p>
                <button onClick={handleSell}>Sprzedaz detaliczna</button>
                <button onClick={handleReceive}>Przyjecie tych butow</button>
            </div>
        </div>
    )
}

function decreaseCount(count) {
    if (count - 1 > 0) return count - 1;
    return 0;
}

ItemCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    count: PropTypes.number,
    id: PropTypes.number,
    onCountChange: PropTypes.func
}
