import PropTypes from 'prop-types';

export default function TextInput({label, name, value, onChange, type}){
    return (
        <div>
            {label !== '' && <label htmlFor={name}>{label}: </label>}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string
}
