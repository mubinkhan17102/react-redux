import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';
import { selectAllUsers } from '../users/userSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers)
    
    const handlePostAdd = (e)=>{
        e.preventDefault();
        if(title && content){
            dispatch(postAdded(title, content, author));
            setTitle('');
            setContent('');
            setAuthor('');
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(author);

    const authorList = users.map(user => (
        <option value={user.id} key={user.id}>{user.name}</option>
    ))
  
    return (
        <div>
            <h2>Add a new post</h2>
            <form>
                <label htmlFor="postTitle">Post title: </label>
                <input 
                    type="text"
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange = {(e)=>setTitle(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="selectAuthor">Select Author</label>
                <select name="selectAuthor" id="selectAuthor" onChange={(e)=>setAuthor(e.target.value)}>
                    <option value=""></option>
                    {authorList}
                </select>
                <br />
                <br />
                <label htmlFor="postContent">Post Content: </label>
                <textarea 
                    name="postContent" 
                    id="postContent"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                />
                <br />
                <br />
                <button type='button' onClick={handlePostAdd} disabled={!canSave}>Save Post</button>
            </form>
        </div>
    )
}

export default AddPostForm