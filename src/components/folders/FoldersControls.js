import PropTypes from 'prop-types'
// mui
import { Box, Button, Stack, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
// icons
import SvgIconStyle from '../SvgIconStyle'
import FoldersPopover from './FoldersPopover'

FoldersControls.propTypes = {
  openPopover: PropTypes.func,
  closePopover: PropTypes.func,
  newFolderNameChange: PropTypes.func,
  createFolder: PropTypes.func,
}

export default function FoldersControls({ newFolderNameChange, createFolder, open, openPopover, closePopover }) {

  return (
    <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="h5">Folders</Typography>
      <Box>
        <Button
          sx={{ mr: '8px', width: '36px', height: '36px' }}
          variant="outlined"
        >
          <SvgIconStyle src="/assets/icons/navbar/Settings.svg" />
        </Button>
        <Button
          onClick={openPopover}
          sx={{ width: '36px', height: '36px'  }}
          variant="outlined"
        >
          <Add />
        </Button>
      </Box>
      <FoldersPopover
        open={open}
        closePopover={closePopover}
        newFolderNameChange={newFolderNameChange}
        createFolder={createFolder}
      />
    </Stack>
  )
}