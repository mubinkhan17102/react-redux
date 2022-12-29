import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { selectAllPosts } from './postSlice';
import { postRemove } from './postSlice';
import AddPostForm from './AddPostForm';

const PostList = () => {
    const posts = useSelector(selectAllPosts);
    const dispatch = useDispatch();
    return (
        <>
            <div style={{backgroundColor: '#333333', color: 'white', margin: '0', padding: '0'}}>
                <AddPostForm/>
                <h1 style={{marginLeft: '20px'}}>Posts</h1>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                        posts.map(post => (
                            <div key={post.id} style = {{border:'2px solid', padding: '20px' , margin: '20px', width: '25%'}}>
                                <h2>{post.title}</h2>
                                <p>{post.content.substring(0, 100)}</p>
                                <button onClick={()=>dispatch(postRemove(post.id))}>Remove</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PostList