import { GlobalStyle, Main, Side, WhiteTheme, DarkTheme } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Note from './Note';
import { useEffect } from 'react';
import { useState } from 'react';
import NoteInList from './LinkToNote';
import NoteListStyle from './NotesList/NotesListStyle';
import { Routes, Route } from 'react-router';
import AddNote from './AddNote';
import { LinkToAddStyle } from './LinkToNote/LinkToNoteStyle';
import { useNavigate } from 'react-router-dom';

function App() {

  let [notes, setNotes] = useState(null);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    const response = await fetch('/notes');
    const data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const deleteNote = async (event, id) => {
    event.preventDefault();
    const response = await fetch(`/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setNotes(notes.filter((note) => note.id !== id));
    navigate('/')
  };

  const addNote = async (note) => {
    const response = await fetch(`/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    });
    const data = await response.json();
    setNotes([...notes, data]);
    navigate('/notes/' + data.id);
  };

  const updateNote = async (note, id) => {
    const response = await fetch(`/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    });
    const data = await response.json();
    setNotes(notes.map((note) => note.id === id ? data : note));
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Side>
        {notes &&
          <NoteListStyle>
            <LinkToAddStyle to={'/addNote'}>
              + Ajouter une note
            </LinkToAddStyle>
            {notes.map((note) => {
              return (
                <NoteInList key={note.id} note={note} ></NoteInList>
              );
            })}
          </NoteListStyle>
        }
        {!notes &&
          <p>Chargement...</p>
        }
      </Side>
      <Main>
        <Routes>
          <Route path='/' element={<p>Veuillez séléctionner une note</p>} />
          <Route path='/addNote' element={<AddNote onAdd={addNote} />} />
          <Route path='/notes/:id' element={<Note onDelete={deleteNote} onUpdate={updateNote} />} />
        </Routes>
      </Main>
    </ThemeProvider >
  );
}

export default App;