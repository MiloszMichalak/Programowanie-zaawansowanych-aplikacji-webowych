import PropTypes from "prop-types";

export default function TextAreaInput({label, name, onChange, value}){
    return (
        <div>
            <label htmlFor={name}>{label}: </label>
            <br></br><br></br>
            <textarea
                name={name}    
                id={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

TextAreaInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
}