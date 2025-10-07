import { createSlice } from "@reduxjs/toolkit";

interface User {
  uid: string;
  userName: string;
  email: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}


const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Redux toolkit says either we have to mutate state or return the update data 
      // state = action.payload
      //or return action.payload
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
