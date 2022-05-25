import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedFolder: null,
  folders: [],
}

const slice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    // ADD FOLDER
    addFolder(state, action) {
      state.folders.push(action.payload.newFolder)
    },

    // SELECT FOLDER
    selectFolder(state, action) {
      if (state.selectedFolder !== null) {
        console.log('null')
        state.folders[state.selectedFolder].selected = false
        state.selectedFolder = null
      }
      const folder = state.folders.findIndex(folder => folder.id === action.payload.id)
      state.folders[folder].selected = true
      state.selectedFolder = folder
    }
  }
})

// REDUCER
export default slice.reducer

// ACTIONS
export const { addFolder, selectFolder } = slice.actions