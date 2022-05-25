import PropTypes from 'prop-types'
// mui
import { Box, List } from '@mui/material'
// components
import Folder from './Folder'

FoldersList.propTypes = {
  folders: PropTypes.array,
  folderSelect: PropTypes.func
}

export default function FoldersList({folders, folderSelect}) {

  return (
    <Box>
      <List
        sx={{
          px: 2
        }}
      >
        {folders && folders.map(folder => (
          <Folder
            selected={folder.selected}
            key={folder.id}
            folderSelect={() => folderSelect(folder.id)}
            folderName={folder.name}
          />
        ))}
      </List>
    </Box>
  )
}