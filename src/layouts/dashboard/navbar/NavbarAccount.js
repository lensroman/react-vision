import { useState } from 'react'
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Divider, IconButton, RadioGroup, Radio, Typography, FormControlLabel, Collapse } from '@mui/material';
// hooks
import useAuth from '../../../hooks/useAuth';
// routes
// components
import MyAvatar from '../../../components/MyAvatar';
import SvgIconStyle from '../../../components/SvgIconStyle'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  width: '87%',
  margin: '0 auto',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

NavbarAccount.propTypes = {
  isCollapse: PropTypes.bool,
};

export default function NavbarAccount({ isCollapse }) {
  const { user } = useAuth();

  const [accountCollapse, setAccountCollapse] = useState(false)

  const accountCollapseHandler = () => {
    setAccountCollapse(!accountCollapse)
  }

  return (
    <Box>
      <RootStyle
        sx={{
          ...(isCollapse && {
            bgcolor: 'transparent',
          }),
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <MyAvatar />

          <Box
            sx={{
              ml: 2,
              transition: (theme) =>
                theme.transitions.create('width', {
                  duration: theme.transitions.duration.shorter,
                }),
              ...(isCollapse && {
                ml: 0,
                width: 0,
              }),
            }}
          >
            <Typography variant="subtitle2" noWrap>
              {user?.displayName}
            </Typography>
            <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
              {user?.role}
            </Typography>
          </Box>

          <Box sx={{ alignSelf: 'flex-start', pl: 2 }}>
            <IconButton onClick={accountCollapseHandler} >
              <SvgIconStyle src="/assets/icons/navbar/NavAccountCollapse.svg" sx={{ width: 12, height: 12, color: 'text.secondary' }} />
            </IconButton>
          </Box>
        </Box>

        <Collapse in={accountCollapse}>
          <Divider sx={{ pt: 1, pb: 1 }} />

          <RadioGroup
            defaultValue="personal"
            sx={{ mt: 1 }}
          >
            <FormControlLabel value="personal" control={<Radio />} label="Personal" />
            <FormControlLabel value="team" control={<Radio />} label="Team" />
          </RadioGroup>
        </Collapse>
      </RootStyle>
    </Box>
  );
}
