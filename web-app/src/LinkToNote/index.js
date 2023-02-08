import { LinkToNoteStyle } from "./LinkToNoteStyle";
import { Link } from "react-router-dom";

const NoteInList = ({ note }) => {
    return (
        <LinkToNoteStyle to={`/notes/${note.id}`}>
            {note.title}
        </LinkToNoteStyle>
    );
}

export default NoteInList;