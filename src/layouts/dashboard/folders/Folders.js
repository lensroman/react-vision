import PropTypes from 'prop-types'
// mui
import { Box, Button, Stack, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'

import SvgIconStyle from '../../../components/SvgIconStyle'

Folders.propTypes = {
  isCollapse: PropTypes.bool
}

export default function Folders({isCollapse}) {

  return (
    <Box
      sx={{
        width: '20%',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
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
              sx={{ width: '36px', height: '36px'  }}
              variant="outlined"
            >
              <Add />
            </Button>
          </Box>
        </Stack>

      </Stack>
    </Box>
  )
}