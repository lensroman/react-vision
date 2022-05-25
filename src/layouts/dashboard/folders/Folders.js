import { useState } from 'react'
import PropTypes from 'prop-types'
// store
import { useDispatch, useSelector } from 'react-redux'
// mui
import { Box, Stack } from '@mui/material'
// components
import FoldersControls from '../../../components/folders/FoldersControls'
import FoldersList from '../../../components/folders/FoldersList'

Folders.propTypes = {
  isCollapse: PropTypes.bool
}

export default function Folders({isCollapse}) {
  const [newFolderName, setNewFolderName] = useState(null)

  const [openPopover, setOpenPopover] = useState(null)

  const openPopoverHandler = (event) => {
    setOpenPopover(event.currentTarget)
  }
  const closePopoverHandler = () => {
    setOpenPopover(null)
  }

  const {folders} = useSelector((state) => state.folders)

  const dispatch = useDispatch()

  const folderSelectHandler = (id) => {
    dispatch({type: 'folders/selectFolder', payload: {id}})
  }

  const newFolderNameChangeHandler = (event) => {
    setNewFolderName(event.target.value)
  }

  const createFolderHandler = () => {
    console.log(folders.length)
    const newFolder = {
      id: folders.length ? folders[folders.length - 1].id + 1 : 1,
      name: newFolderName,
      selected: false,
    }
    if (newFolder.name) {
      dispatch({type: 'folders/addFolder', payload: {newFolder}})
      setNewFolderName(null)
      closePopoverHandler()
    }
  }

  return (
    <Box>
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
          ...(isCollapse && {alignItems: 'center'}),
        }}
      >
        <FoldersControls
          open={openPopover}
          openPopover={openPopoverHandler}
          closePopover={closePopoverHandler}
          newFolderNameChange={newFolderNameChangeHandler}
          createFolder={createFolderHandler}
        />
      </Stack>

      <FoldersList
        folders={folders}
        folderSelect={folderSelectHandler}
      />
    </Box>
  )
}