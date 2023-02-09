import { LinkToNoteStyle, LinkToNoteStyleSaved } from "./LinkToNoteStyle";

export const NoteInList = ({ id, title, content }) => {
    return (
        <LinkToNoteStyle to={`/notes/${id}`}>
            {title}
            <p>{content}</p>
        </LinkToNoteStyle>
    );
}

export const NoteInListSaved = ({ id, title, content }) => {
    return (
        <LinkToNoteStyleSaved to={`/notes/${id}`}>
            {title}
            <p>{content}</p>
        </LinkToNoteStyleSaved>
    );
}