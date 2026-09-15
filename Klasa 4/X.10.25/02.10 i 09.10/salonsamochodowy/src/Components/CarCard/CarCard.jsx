import styles from './CarCard.module.css'
export default function CarCard(props) {
    return (
        <div>
            <p className={styles.carBrand}>Marka: {props.brand}</p>
            <p>Zdjecie: </p>
            <img className={styles.carImg} src={props.image} alt="car"/>
        </div>
    );
}
