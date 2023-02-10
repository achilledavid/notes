import { Button } from "../Button/ButtonStyle";
import Tag from "../Tag";

const TagsList = ({ tags, onDelete }) => {
    return (
        <div className="tags_list">
            {tags.map((tag) => {
                return <Button className="tag small"><Tag key={tag.id} onDelete={onDelete} tag={tag}></Tag></Button>;
            }
            )}
        </div>
    )
};

export default TagsList;