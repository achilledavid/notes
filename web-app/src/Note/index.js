import { Form, Title, Textarea } from './NoteStyle';
import { Button } from '../Button/ButtonStyle';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Note = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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

    const saveNote = async () => {
        alert('Note modifiée !');
        const title = document.querySelector('input').value;
        const content = document.querySelector('textarea').value;
        const response = await fetch(`/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });
    };

    const deleteNote = async () => {
        alert('Note supprimée !');
        const response = await fetch(`/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate('/addNote')
    };

    return (
        <Form>
            <Title type='text' placeholder='Titre' defaultValue={note ? note.title : ""} />
            <Textarea placeholder='Entrez votre texte ici...' defaultValue={note ? note.content : ""} />
            <Button onClick={saveNote}>Enregistrer</Button>
            <Button onClick={deleteNote}>Supprimer</Button>
        </Form>
    );
};

export default Note;