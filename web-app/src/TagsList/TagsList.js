import { Button } from "../Button/ButtonStyle";
import Tag from "../Tag";

const TagsList = ({ tags }) => {
    return (
        <div className="tags_list">
            {tags.map((tag) => {
                return <Button className="tag small"><Tag key={tag.id} tag={tag}></Tag></Button>;
            }
            )}
        </div>
    )
};

export default TagsList;