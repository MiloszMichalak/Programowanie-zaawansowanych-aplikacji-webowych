import PropTypes from "prop-types";

export default function SelectInput({label, name, options, value, onChange}) {
    return (
        <div>
            <label htmlFor={name}>{label}: </label>
            <select 
                id={name}
                name={name}
                value={value}
                onChange={onChange}>
                    {
                        options.map(option => (
                            <option key={option.id} value={option.id}>{option.name}</option>
                        ))
                    }    
            </select>
        </div>
    );
}

SelectInput.propTypes = {
    labe: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func
}