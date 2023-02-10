import { GlobalStyle, Main, Side, WhiteTheme, DarkTheme, Loader, Empty, Container } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Note from "./Note";
import { useEffect } from "react";
import { useState } from "react";
import { NoteInListSaved } from "./LinkToNote";
import NoteListStyle from "./NotesList/NotesListStyle";
import { Routes, Route } from "react-router";
import AddNote from "./AddNote";
import { LinkToAddStyle } from "./LinkToNote/LinkToNoteStyle";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillPinFill, BsPin, BsFillSunFill, BsFillMoonFill, BsPlusLg, BsTagsFill } from "react-icons/bs";
import { Button } from "./Button/ButtonStyle";
import Notif from "./Notif";
import Tags from "./Tags";

function App() {
  let [notes, setNotes] = useState(null);
  const navigate = useNavigate();
  let [isSelected, setIsSelected] = useState(0);
  let [theme, setTheme] = useState("dark");

  useEffect(() => {
    fetchNotes();
  }, []);

  // Récupération des notes

  const fetchNotes = async () => {
    const response = await fetch("/notes");
    const data = await response.json();
    setNotes(data);
  };

  // Suppression d'une note

  const deleteNote = async (event, id) => {
    const response = await fetch(`/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setNotes(notes.filter((note) => note.id !== parseInt(id)));
    navigate("/");
  };

  // Ajout d'une note

  const addNote = async (note) => {
    const response = await fetch(`/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const data = await response.json();
    setNotes([...notes, data]);
    navigate("/notes/" + data.id);
    setIsSelected(data.id);
  };

  // Modification d'une note

  const updateNote = async (note, id) => {
    const response = await fetch(`/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const data = await response.json();
    setNotes(notes.map((note) => (note.id === id ? data : note)));
  };

  // Pin d'une note

  const pinNote = async (note, id) => {
    if (note.pinned) {
      note.pinned = false;
    } else {
      note.pinned = true;
    }
    const response = await fetch(`/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const data = await response.json();
    setNotes(notes.map((note) => (note.id === parseInt(id) ? data : note)));
  };

  // Vérouiller une note

  const lockNote = async (note, id) => {
    if (note.locked) {
      note.locked = false;
    } else {
      note.locked = true;
    }
    const response = await fetch(`/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const data = await response.json();
    setNotes(notes.map((note) => (note.id === parseInt(id) ? data : note)));
  };

  // Changement de thème

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  // Navigation vers la page d'ajout de note

  const goToAdd = () => {
    navigate("/addNote");
  };

  // Navigation vers la page d'ajout de note

  const goToTags = () => {
    navigate("/tags");
  };

  return (
    <ThemeProvider theme={theme === 'light' ? WhiteTheme : DarkTheme}>
      <GlobalStyle />
      <Side>
        {notes && (
          <NoteListStyle>
            <div className="head">
              <h1>Notes</h1>
              <div className="buttons">
                <Button className="icon small" onClick={goToTags}>
                  <span>
                    <BsTagsFill></BsTagsFill>
                  </span>
                </Button>
                <Button className="icon small" onClick={goToAdd}>
                  <span>
                    <BsPlusLg></BsPlusLg>
                  </span>
                </Button>
                <Button className="icon small" onClick={toggleTheme}>
                  <span>
                    {theme != 'light' ? <BsFillSunFill></BsFillSunFill> : <BsFillMoonFill></BsFillMoonFill>}
                  </span>
                </Button>
              </div>
            </div>
            <div className="sidebar__container">
              <LinkToAddStyle className="pin">
                <span>
                  <BsFillPinFill></BsFillPinFill>
                  <p>Pinned</p>
                </span>
              </LinkToAddStyle>

              {notes.map((note) => {
                return (
                  <>
                    {note.pinned && (
                      <>
                        <NoteInListSaved
                          key={note.id}
                          id={note.id}
                          title={note.title ? note.title : "Title"}
                          content={
                            note.content
                              ? note.content
                              : "Type your text here..."
                          }
                          pinned={note.pinned}
                          active={note.id === isSelected && "selected"}
                          setIsSelected={setIsSelected}
                          locked={note.locked}
                        ></NoteInListSaved>
                      </>
                    )}
                  </>
                );
              })}
              <LinkToAddStyle className="pin">
                <span>
                  <BsPin></BsPin>
                  <p>Notes</p>
                </span>
              </LinkToAddStyle>
              {notes.map((note) => {
                return (
                  <>
                    {!note.pinned && (
                      <>
                        <NoteInListSaved
                          key={note.id}
                          id={note.id}
                          title={note.title ? note.title : "Title"}
                          content={
                            note.content
                              ? note.content
                              : "Type your text here..."
                          }
                          pinned={note.pinned}
                          active={note.id === isSelected && "selected"}
                          setIsSelected={setIsSelected}
                        ></NoteInListSaved>
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </NoteListStyle>
        )}
        {!notes && <Loader />}
      </Side>
      <Main>
        <Container>
          <Routes>
            <Route
              path="/"
              element={<Empty>Veuillez séléctionner une note</Empty>}
            />
            <Route path="/addNote" element={<AddNote onAdd={addNote} />} />
            <Route path="/tags" element={<Tags />} />
            <Route
              path="/notes/:id"
              element={
                <Note
                  onDelete={deleteNote}
                  onUpdate={updateNote}
                  onPin={pinNote}
                  onLock={lockNote}
                />
              }
            />
          </Routes>
        </Container>
        <Notif></Notif>
      </Main>
    </ThemeProvider>
  );
}

export default App;
