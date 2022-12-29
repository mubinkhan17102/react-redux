import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'Learning redux toolkit', content: 'I,ve heard good things'},
    {id: 2, title: 'Slices...', content: 'About slices..'},
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload);
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postSlice.actions;

export default postSlice.reducer;