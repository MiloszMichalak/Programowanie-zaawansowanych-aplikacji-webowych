import propTypes from "prop-types"

export default function ItemCategory(props){
    return (
        <h2>Obuwie: {props.category}</h2>
    )
}

ItemCategory.propTypes = {
    category: propTypes.string.isRequired
}
