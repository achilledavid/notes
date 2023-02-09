import { Form, Title, Textarea } from '../Note/NoteStyle';
import { Button } from '../Button/ButtonStyle';
import { useNavigate } from 'react-router';

const AddNote = () => {
    const navigate = useNavigate();

    const saveNote = async () => {
        const title = document.querySelector('input').value;
        const content = document.querySelector('textarea').value;
        const response = await fetch(`/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });
        const data = await response.json();
        alert('Note ajoutée !');
        navigate(`/note/${data.id}`);
    };

    return (
        <Form>
            <Title type='text' placeholder='Titre' />
            <Textarea placeholder='Entrez votre texte ici...' />
            <Button onClick={saveNote}>Ajouter</Button>
        </Form>
    );
}

export default AddNote;