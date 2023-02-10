import { Form, Title, Textarea, ButtonContainer } from './NoteStyle';
import { Button } from '../Button/ButtonStyle';
import Modal from '../Modal';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { Loader } from '../GlobalStyle';
import { BsPin, BsFillPinFill, BsCheck2 } from "react-icons/bs";
import { FaLock, FaTrash, FaUnlock } from "react-icons/fa";

const Note = ({ onDelete, onUpdate, onPin, onLock }) => {
    const { id } = useParams();
    let [note, setNote] = useState(null);
    let [isSaved, setIsSaved] = useState(true);
    let [status, setStatus] = useState('');
    let [isConfirm, setIsConfirm] = useState(false);
    let [tags, setTags] = useState([]);

    useEffect(() => {
        fetchTags();
    }, []);

    const fetchNote = useCallback(async () => {
        setNote(null);
        const response = await fetch(`/notes/${id}`);
        const data = await response.json();
        setNote(data);
    }, [id]);

    const fetchTags = useCallback(async () => {
        const response = await fetch(`/tags`);
        const data = await response.json();
        setTags(data);
    }, []);

    useEffect(() => {
        fetchNote();
    }, [id, fetchNote]);

    const updateNoteTitle = async (event) => {
        setNote({ title: event.target.value, content: note.content, id: note.id, pinned: note.pinned, locked: note.locked });
    };

    const updateNoteContent = async (event) => {
        setNote({ title: note.title, content: event.target.value, id: note.id, pinned: note.pinned, locked: note.locked });
    };

    useEffect(() => {
        const delay = setTimeout(() => {
            onUpdate(note, note.id);
            setIsSaved(true);
        }, 1000)

        return () => {
            clearTimeout(delay);
            setIsSaved(false);
        }
    }, [note])

    useEffect(() => {
        if (status === 'delete') {
            if (isConfirm) {
                onDelete(note.id);
                console.log(note.id)
            } else {
            }
            setStatus('');
        }
    }, [isConfirm])

    return (
        <>
            {note &&
                <Form onSubmit={(event) => event.preventDefault()}>
                    < Title type='text' placeholder='Title' readOnly={note.locked ? 'on' : 'off'} value={note ? note.title : ""} onChange={updateNoteTitle} />
                    <Textarea placeholder='Type your text here...' readOnly={note.locked && 'on'} value={note ? note.content : ""} onChange={updateNoteContent} />
                    {status === "delete" && <Modal changeStatus={setStatus} onConfirm={(event) => onDelete(event, id)} />}
                    <ButtonContainer>
                        <Button className='icon small' title='delete note' onClick={() => setStatus("delete")}><span><FaTrash></FaTrash></span></Button>
                        {note.pinned && <Button className='icon small' title='unpin note' onClick={(event) => onPin(note, id)}><span><BsFillPinFill></BsFillPinFill></span></Button>}
                        {!note.pinned && <Button className='icon small' title='pin note' onClick={(event) => onPin(note, id)}><span><BsPin></BsPin></span></Button>}
                        {note.locked && <Button className='icon small' title='unlock note' onClick={(event) => onLock(note, id)}><span><FaLock></FaLock></span></Button>}
                        {!note.locked && <Button className='icon small' title='lock note' onClick={(event) => onLock(note, id)}><span><FaUnlock></FaUnlock></span></Button>}
                        {note.tags &&
                            tags.map((tag) => {
                                {
                                    return note.tags.map((noteTag) => {
                                        if (tag.id === noteTag.id) {
                                            console.log(tag.id);
                                            return (<Button className='tag small' style={{ color: tag.color }} key={tag.id} ># {tag.name}</Button>);
                                        }
                                    })
                                }
                            })
                        }
                        {isSaved && <div className='check'>Saved<BsCheck2></BsCheck2></div>}{!isSaved && ''}
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