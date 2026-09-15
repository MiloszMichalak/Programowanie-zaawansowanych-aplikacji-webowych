import styles from "./Footer.module.css"
export default function Footer(props) {
    return (
        <p className={styles.footerText}>Zapraszamy codziennie od {props.openTime} do {props.closeTime}</p>
    );
}
