import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: false, // Sidebar is closed by default
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen; // Toggle the sidebar state
    },
    openSidebar: (state) => {
      state.isOpen = true; // Open the sidebar
    },
    closeSidebar: (state) => {
      state.isOpen = false; // Close the sidebar
    },
  },
});

// Export actions to be used in components
export const { toggleSidebar, openSidebar, closeSidebar } = sidebarSlice.actions;

// Export the reducer to be included in the store
export default sidebarSlice.reducer;
