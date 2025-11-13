import propTypes from "prop-types"

export default function Header(props) {
    return (
        <h1>Polecamy buty firmy: {props.name}</h1>
    )
}

Header.propTypes = {
    name: propTypes.string.isRequired
}