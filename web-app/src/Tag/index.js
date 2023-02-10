const Tag = ({ tag }) => {
    return (
        <p style={{ color: tag.color }}># {tag.name}</p>
    )
}

export default Tag