export default function TextInput({label, name, value, onChange}) {
    return (
        <div>
            <label htmlFor="name">{label}: </label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    )
}
