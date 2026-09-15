import styles from "./Header.module.css";;

export default function Header(props) {
    return(
        <h1 className={styles.header}>Witamy w bibliotece {props.name} w {props.city}</h1>
    )
}
