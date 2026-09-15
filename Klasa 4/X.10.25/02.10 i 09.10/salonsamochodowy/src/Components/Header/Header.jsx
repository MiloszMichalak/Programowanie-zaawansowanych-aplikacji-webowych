import styles from './Header.module.css';
export default function Header(props) {
    return (
        <h1 className={styles.header}>Witamy na stronie firmy: {props.companyName}</h1>
    )
}
