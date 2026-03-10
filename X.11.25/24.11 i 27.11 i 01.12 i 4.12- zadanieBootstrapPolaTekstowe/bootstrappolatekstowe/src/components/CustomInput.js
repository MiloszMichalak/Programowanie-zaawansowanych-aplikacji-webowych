import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

export default function CustomInput(props) {
    return (
        <Row>
            <label className="form-label" htmlFor={props.name}>{props.label}</label>
            <input
                id={props.name}
                name={props.name}
                type='text'
                className="form-control"
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </Row>
    )
}

CustomInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}

