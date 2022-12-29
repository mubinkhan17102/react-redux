import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Learning redux toolkit', content: 'I,ve heard good things'},
    {id: '2', title: 'Slices...', content: 'About slices..'},
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, content){
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
        postRemove(state, action){
            state.filter((post)=>post.id !== action.payload);
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded, postRemove} = postSlice.actions;

export default postSlice.reducer;