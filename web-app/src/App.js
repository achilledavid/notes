import { GlobalStyle, Main, Side, WhiteTheme, DarkTheme } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Note from './Note';
import { useEffect } from 'react';
import { useState } from 'react';
import NoteInList from './LinkToNote';
import NoteListStyle from './NotesList/NotesListStyle';
import { Button } from './Button/ButtonStyle';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';

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
        <p>Toutes les notes : </p>
        {notes &&
          <NoteListStyle>
            {notes.map((note) => {
              return (
                <NoteInList key={note.id} note={note} ></NoteInList>
              );
            })}
            {/* <Link to={'/add'}>Ajouter une note</Link> */}
          </NoteListStyle>
        }
        {!notes &&
          <p>Chargement...</p>
        }
      </Side>
      <Main>
        <Routes>
          <Route path='/' element={<p>Veuillez séléctionner une note</p>} />
          <Route path='/add' element={<Note />} />
          <Route path='/notes/:id' element={<Note />} />
        </Routes>
      </Main>
    </ThemeProvider >
  );
}

export default App;