import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";

import movieReducer from "./movieSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer
  },
});


// Export types
export type AppState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;


export default appStore;
