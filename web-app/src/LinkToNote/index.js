import { LinkToNoteStyleSaved } from "./LinkToNoteStyle";

export const NoteInListSaved = ({ id, title, content, active, setIsSelected }) => {
    return (
        <>
            <LinkToNoteStyleSaved className={active} to={`/notes/${id}`} onClick={() => setIsSelected(id)}>
                {title}
                <p>{content}</p>
            </LinkToNoteStyleSaved>
        </>
    );
};
