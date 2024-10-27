import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './sidebarSlice'; // Adjust the path as needed
import themeSlice from './themeSlice';
import logOutSlice from './logOutSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    admintheme: themeSlice,
    logout: logOutSlice,


  },
});

export default store;
