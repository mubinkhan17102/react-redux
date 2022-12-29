import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postAdded } from './postSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch()
    const handlePostAdd = (e)=>{
        e.preventDefault();
        if(title && content){
            dispatch(postAdded(title, content));
            setTitle('');
            setContent('');
        }
    }
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
            <label htmlFor="postContent">Post Content: </label>
            <textarea 
                name="postContent" 
                id="postContent"
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            />
            <br />
            <br />
            <button type='button' onClick={handlePostAdd}>Save Post</button>
        </form>
    </div>
  )
}

export default AddPostForm