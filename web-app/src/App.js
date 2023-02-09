import { GlobalStyle, Main, Side, WhiteTheme, DarkTheme } from './GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import Note from './Note';
import { useEffect } from 'react';
import { useState } from 'react';
import NoteInList from './LinkToNote';
import NoteListStyle from './NotesList/NotesListStyle';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import AddNote from './AddNote';
import { LinkToAddStyle } from './LinkToNote/LinkToNoteStyle';

function App() {

  let [notes, setNotes] = useState(null);

  const fetchNotes = async () => {
    const response = await fetch('/notes');
    const data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <ThemeProvider theme={WhiteTheme}>
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
          <Route path='/addNote' element={<AddNote />} />
          <Route path='/notes/:id' element={<Note />} />
        </Routes>
      </Main>
    </ThemeProvider >
  );
}

export default App;