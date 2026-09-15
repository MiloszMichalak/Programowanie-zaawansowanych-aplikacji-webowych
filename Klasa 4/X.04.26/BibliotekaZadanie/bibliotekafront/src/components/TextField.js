export default function TextField({ label, id, value, onChange, placeholder, disabled }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
            />
        </div>
    );
}
