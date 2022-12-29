import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { selectAllPosts, postAdded } from './postSlice';

const PostList = () => {
    const posts = useSelector(selectAllPosts);
    console.log(posts);
    const dispatch = useDispatch();
    return (
        <div style={{backgroundColor: '#333333', color: 'white', margin: '0', padding: '0'}}>
            <h1 style={{marginLeft: '20px'}}>Posts</h1>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    posts.map(post => (
                        <div key={post.id} style = {{border:'2px solid', padding: '20px' , margin: '20px', width: '25%'}}>
                            <h2>{post.title}</h2>
                            <p>{post.content.substring(0, 100)}</p>
                            <button>Read More</button>
                        </div>
                    ))
                }
            </div>
            <button onClick={()=>dispatch(postAdded({id: 3, title: 'test', content: 'test'}))}>
                ADD POST
            </button>
        </div>
    )
}

export default PostList