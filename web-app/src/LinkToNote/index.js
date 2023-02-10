import { LinkToNoteStyleSaved } from "./LinkToNoteStyle";
import { FaLock, FaUnlock } from "react-icons/fa";

export const NoteInListSaved = ({ id, title, content, active, setIsSelected, locked }) => {
    return (
        <>
            <LinkToNoteStyleSaved className={active} to={`/notes/${id}`} onClick={() => setIsSelected(id)}>
                {title}
                <p>{content}</p>
                {locked && <FaLock className="lock"></FaLock>}
                {!locked && <FaUnlock className="lock"></FaUnlock>}
            </LinkToNoteStyleSaved>
        </>
    );
};
