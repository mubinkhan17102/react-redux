import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {id: '1', name: 'Mubin'},
  {id: '2', name: 'Jhon'},
  {id: '3', name: 'Brad'}
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: {
      reducer(state, action){
        state.push(action.payload);
      },
      prepare(name){
        return {
          payload: {
            id: nanoid(),
            name
          }
        }
      }
    }
  }
});


export const selectAllUsers = (state) => state.users;

export const {addUser} = userSlice.actions;

export default userSlice.reducer;
