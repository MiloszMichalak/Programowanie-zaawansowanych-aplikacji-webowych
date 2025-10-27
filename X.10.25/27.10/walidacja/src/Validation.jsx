import propTypes from 'prop-types'

export default function Age({age, month}) {
    return (
        <h1>Juz masz {age} lat i {month} miesiecy</h1>
    );
}

Age.propTypes = {
    age: propTypes.number.isRequired,
    month: propTypes.string
}
