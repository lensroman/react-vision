import PropTypes from 'prop-types'
// mui
import { Box, Button, FormControl, InputAdornment, Popover, TextField } from '@mui/material'
import SvgIconStyle from '../SvgIconStyle'

FoldersPopover.propTypes = {
  open: PropTypes.object,
  closePopover: PropTypes.func,
  newFolderNameChange: PropTypes.func,
  createFolder: PropTypes.func,
}

export default function FoldersPopover({ open, closePopover, newFolderNameChange, createFolder }) {
  const openProp = Boolean(open)

  return (
    <Popover
      open={openProp}
      onClose={closePopover}
      anchorEl={open}

    >
      <Box
        sx={{ p: 1 }}
      >
        <FormControl sx={{ p: 2 }}>
          <TextField
            onChange={newFolderNameChange}
            size="small"
            variant="outlined"
            label="New Folder"
            InputProps={{
              endAdornment: <InputAdornment position="end">{<SvgIconStyle src="/assets/icons/folders/Folder.svg" />}</InputAdornment>
            }}
          />
        </FormControl>
        <Box
          sx={{
            width: '80%',
            display: 'flex',
            ml: '19%',
            justifyContent: 'space-between'
          }}
        >
          <Button
            variant="outlined"
            onClick={closePopover}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={createFolder}
          >
            Create Folder
          </Button>
        </Box>
      </Box>
    </Popover>
  )
}