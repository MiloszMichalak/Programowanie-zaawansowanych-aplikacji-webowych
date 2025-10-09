import styles from './Subtitle.module.css';
export default function Subtitle(props) {
    return (
        <h2 className={styles.subtitle}>Polecamy {props.type} samochody w najlepszej cenie</h2>
    );
}
