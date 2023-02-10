import { useEffect } from 'react';
import { useState, useCallback } from 'react';
import TagsList from '../TagsList/TagsList';
import { TagsStyle } from "./TagsStyle"
import { BsPlus } from "react-icons/bs";
import { CgColorPicker } from "react-icons/cg";
import { Button } from '../Button/ButtonStyle';

const Tags = () => {
    let [tags, setTags] = useState([]);
    let [newTag, setNewTag] = useState({ name: '', color: '' });

    useEffect(() => {
        fetchTags();
    }, []);

    const fetchTags = useCallback(async () => {
        const response = await fetch(`/tags`);
        const data = await response.json();
        setTags(data);
    }, []);

    const updateTagTitle = async (event) => {
        setNewTag({ name: event.target.value, color: newTag.color });
    };

    const updateTagColor = async (event) => {
        setNewTag({ name: newTag.name, color: event.target.value });
    };

    const addTag = async () => {
        const response = await fetch(`/tags`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTag),
        });
        const data = await response.json();
        setTags([...tags, data]);
        setNewTag('');
        clearInputs();
    };

    const clearInputs = () => {
        document.querySelector('input[type="text"]').value = '';
        document.querySelector('input[type="color"]').value = '';
    };

    return (
        <TagsStyle>
            <div className='tag_head'>
                <h1>Tags</h1>
                <input type={'text'} placeholder='Enter a tag name...' defaultValue={''} onChange={updateTagTitle}></input>
                <label for="color">
                    <div style={{ background: newTag.color }} className='button icon'><span><CgColorPicker></CgColorPicker></span></div>
                    <input type='color' id='color' className="color" onChange={updateTagColor}></input>
                </label>
                <Button className='icon' onClick={addTag}><span><BsPlus></BsPlus></span></Button>
            </div>
            <TagsList tags={tags}></TagsList>
        </TagsStyle>
    )
}

export default Tags