import { Form, Title, Textarea } from './NoteStyle';
import { Button } from '../Button/ButtonStyle';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';

const Note = () => {
    const { id } = useParams();
    let [note, setNote] = useState(null);

    const fetchNote = useCallback(async () => {
        const response = await fetch(`/notes/${id}`);
        const data = await response.json();
        setNote(data);
        console.log(data.title)
    }, [id]);

    useEffect(() => {
        fetchNote();
    }, [id, fetchNote]);

    return (
        <Form>
            <Title type='text' placeholder='Titre' defaultValue={note ? note.title : ""} />
            <Textarea placeholder='Entrez votre texte ici...' defaultValue={note ? note.content : ""} />
            <Button>Enregistrer</Button>
        </Form>
    );
};

export default Note;