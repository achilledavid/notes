import { BsX } from "react-icons/bs"

const Tag = ({ tag, onDelete }) => {

    return (
        <p style={{ color: tag.color }}># {tag.name} <BsX onClick={(event) => onDelete(event, tag.name, tag.id)}></BsX></p>
    )
}

export default Tag