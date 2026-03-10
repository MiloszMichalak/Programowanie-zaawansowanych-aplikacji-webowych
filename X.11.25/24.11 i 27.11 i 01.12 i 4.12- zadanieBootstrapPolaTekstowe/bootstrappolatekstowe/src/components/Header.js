import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

export default function Header(props) {
    return (
        <Col>
            <h1 className="text-decoration-underline text-primary" >Witamy na stronie: Matematyka dla każdego</h1>
            <h2>Pomozemy zrozumiec i rozwiazac: {props.topic}</h2>
        </Col>
    );
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
};
