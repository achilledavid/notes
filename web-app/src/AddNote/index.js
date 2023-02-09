import { Form, Title, Textarea } from '../Note/NoteStyle';
import { Button } from '../Button/ButtonStyle';
import { useState } from 'react';

const AddNote = ({ onAdd }) => {
    let [note, setNote] = useState({
        title: '',
        content: ''
    });

    const updateNoteTitle = (event) => {
        setNote({ title: event.target.value, content: note.content });
    };

    const updateNoteContent = (event) => {
        setNote({ title: note.title, content: event.target.value });
    };

    return (
        <Form onSubmit={(event) => { event.preventDefault(); onAdd(note); }}>
            <Title type='text' placeholder='Titre' onChange={updateNoteTitle} />
            <Textarea placeholder='Entrez votre texte ici...' onChange={updateNoteContent} />
            <Button type='submit' >Ajouter</Button>
        </Form>
    );
}

export default AddNote;