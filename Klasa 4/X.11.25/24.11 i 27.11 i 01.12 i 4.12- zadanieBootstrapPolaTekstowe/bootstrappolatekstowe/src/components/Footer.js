import PropTypes from "prop-types"

export default function Footer(props) {
    return (
        <h6>Pomyslnego rozwiazywania {props.kind}</h6>
    )
}

Footer.propTypes = {
    kind: PropTypes.string.isRequired,
}
