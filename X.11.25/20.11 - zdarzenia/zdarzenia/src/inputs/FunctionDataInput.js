import { Container, Row, Col } from "react-bootstrap";

export default function Checkout() {
    return (
        <Container>
            <form>
                <Row>
                    <Col xs={12}>
                        <h1>Witamy przy kasie</h1>
                        <h2>Proszę podać dane do wysylki</h2>
                    </Col>
                </Row>
                <Row>   
                    <Col xs={12} >
                        Imie: <input type="text" name="firstName" />
                        Nazwisko: <input type="text" name="lastName" />
                    </Col>
                </Row>
            </form>
        </Container>
    );
}
