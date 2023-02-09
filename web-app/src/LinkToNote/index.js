import { LinkToNoteStyle } from "./LinkToNoteStyle";

const NoteInList = ({ note }) => {
    return (
        <LinkToNoteStyle to={`/notes/${note.id}`}>
            {note.title}
            <p>{note.content}</p>
        </LinkToNoteStyle>
    );
}

export default NoteInList;