import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap"
import MyInput from "../../componenty/forms/MyInput";
import MySelect from "../../componenty/forms/MySelect";
import MyTextArea from "../../componenty/forms/MyTextArea";

export default function Checkout() {
    const paymentOptions = [
        { id: "-", name: "Wybierz sposob platnosci" },
        { id: "pp", name: "PayPal" },  
        { id: "stripe", name: "Stripe" },
        { id: "cc", name: "Karta kredytowa" }
    ]

    const [daneOsobowe, setDaneOsobowe] = useState({
        imie: "",
        nazwisko: "",
        ulica: "",
        kodPocztowy: "",
        miejscowosc: "",
        sposobZaplaty: "",
        uwagi: ""
    });

    const changeHandler = event => {
        let inputValue = event.target.value;
        let inputName = event.target.name;
        setDaneOsobowe(prevState => (
            {
                ...prevState,
                [inputName]: inputValue
            }
        ));

    };

    return (
        <Container>
            <form>
                <Row>
                    <Col xs={12}>
                        <h1>Witamy przy kasie </h1>
                        <h2>Prosze podac dane do wysylki: </h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <MyInput
                            type="text"
                            name="imie"
                            label="Imie"
                            className="form-control"
                            value={daneOsobowe.imie}
                            onChange={changeHandler}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MyInput
                            type="text"
                            name="nazwisko"
                            label="Nazwisko"
                            className="form-control"
                            value={daneOsobowe.nazwisko}
                            onChange={changeHandler}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MyInput
                            type="text"
                            name="ulica"
                            label="Ulica i numer domu:"
                            className="form-control"
                            value={daneOsobowe.ulica}
                            onChange={changeHandler}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MyInput
                            type="text"
                            name="kodPocztowy"
                            label="Kod pocztowy:"
                            className="form-control"
                            value={daneOsobowe.kodPocztowy}
                            onChange={changeHandler}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MyInput
                            type="text"
                            name="miejscowosc"
                            label="Miejscowosc: "
                            className="form-control"
                            value={daneOsobowe.miejscowosc}
                            onChange={changeHandler}
                        />
                    </Col>
                    <Col xs = {12} md = {4}>
                        <MySelect
                            name = "sposobZaplaty"
                            label = "Rodzaj platnosci"
                            className = "form-control"
                            onChange = {changeHandler}
                            value = {daneOsobowe.sposobZaplaty}
                            options = {paymentOptions}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MyTextArea
                            name="uwagi"
                            label="Dodatkowe uwagi do zamowienia:"
                            type="text"
                            value={daneOsobowe.uwagi}
                            className="form-control"
                            onChange={changeHandler}
                        />
                    </Col>
                </Row>
                <br />Wprowadzone imię: {(daneOsobowe.imie === "") ? "jeszcze nie wprowadzone" : daneOsobowe.imie}
                <br />Wprowadzone nazwisko: {(daneOsobowe.nazwisko === "") ? "jeszcze nie wprowadzone" : daneOsobowe.nazwisko}
                <br />Wprowadzona ulica i numer domu: {(daneOsobowe.ulica === "") ? "jeszcze nie wprowadzone" : daneOsobowe.ulica}
                <br />Wprowadzony kod pocztowy: {(daneOsobowe.kodPocztowy === "") ? "jeszcze nie wprowadzone" : daneOsobowe.kodPocztowy}
                <br />Wprowadzona miejscowość: {(daneOsobowe.miejscowosc === "") ? "jeszcze nie wprowadzone" : daneOsobowe.miejscowosc}
                <br />Wybrany sposob zaplaty: {(daneOsobowe.sposobZaplaty === "") ? "jeszcze nie wybrany" : daneOsobowe.sposobZaplaty}
                <br />Dodatkowe uwagi do zamowienia: {(daneOsobowe.uwagi === "") ? "jeszcze nie wprowadzone" : daneOsobowe.uwagi}
            </form >
        </Container >
    );
}
