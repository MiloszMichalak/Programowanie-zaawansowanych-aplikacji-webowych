const { useState } = require("react");

export default function EmailInput() {
    const [errorMessage, setErrorMessage] = useState("");

    function validateEmail(event) {
        const email = event.target.value;
        if (email.trim() === "" || !email.includes("@")) {
            setErrorMessage("Nieprawidłowy adres email");
        } else {
            setErrorMessage("Wszystko git");
        }
    };
    return (
        <div>
            <h2>Walidowanie emaila</h2>
            <input placeholder="user@poczta" type="email" onBlur={validateEmail} />
            <p>{errorMessage}</p>
        </div>
    )
}
