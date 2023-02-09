import { LinkToNoteStyle } from "./LinkToNoteStyle";

const NoteInList = ({ note }) => {
    return (
        <LinkToNoteStyle to={`/notes/${note.id}`}>
            {note.title}
        </LinkToNoteStyle>
    );
}

export default NoteInList;