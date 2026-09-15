import PropTypes from "prop-types";

export default function MySelect(props) {
    const { label, name, value, className, onChange, options } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select
                name = {name}
                id = {name}
                value = {value}
                className = {className}
                onChange = {onChange}
            >
                {
                    options.map((option, index) => (
                        <option key = {index} value = {option.id}>{option.name}</option>
                    )) 
                }
            </select>
        </div>
    )
}

MySelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired
}
