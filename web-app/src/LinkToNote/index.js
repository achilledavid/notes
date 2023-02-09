import { LinkToNoteStyle } from "./LinkToNoteStyle";

const NoteInList = ({ id, title, content }) => {
    return (
        <LinkToNoteStyle to={`/notes/${id}`}>
            {title}
            <p>{content}</p>
        </LinkToNoteStyle>
    );
}

export default NoteInList;