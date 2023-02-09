import { Form, Title, Textarea, ButtonContainer } from './NoteStyle';
import { Button } from '../Button/ButtonStyle';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { Loader } from '../GlobalStyle';

const Note = ({ onDelete, onUpdate }) => {
    const { id } = useParams();
    let [note, setNote] = useState(null);
    let [isSaved, setIsSaved] = useState(true);

    const fetchNote = useCallback(async () => {
        setNote(null);
        const response = await fetch(`/notes/${id}`);
        const data = await response.json();
        setNote(data);
    }, [id]);

    useEffect(() => {
        fetchNote();
    }, [id, fetchNote]);

    const updateNoteTitle = async (event) => {
        setNote({ title: event.target.value, content: note.content, id: note.id });
    };

    const updateNoteContent = async (event) => {
        setNote({ title: note.title, content: event.target.value, id: note.id });
    };

    useEffect(() => {
        const delay = setTimeout(() => {
            onUpdate(note, note.id)
            setIsSaved(true);
        }, 1000)

        return () => {
            clearTimeout(delay)
            setIsSaved(false);
        }
    }, [note])

    return (
        <>
            {note &&
                <Form onSubmit={(event) => event.preventDefault()}>
                    <Title type='text' placeholder='Titre' value={note ? note.title : ""} onChange={updateNoteTitle} />
                    <Textarea placeholder='Entrez votre texte ici...' value={note ? note.content : ""} onChange={updateNoteContent} />
                    <ButtonContainer>
                        <Button onClick={(event) => onDelete(event, note.id)}>Supprimer</Button>
                        <p>{!isSaved && "Modifications non sauvegardées."}{isSaved && 'Modifications sauvegardées.'}</p>
                    </ButtonContainer>
                </Form>
            }
            {
                !note &&
                <Loader></Loader>
            }
        </>
    );
};

export default Note;