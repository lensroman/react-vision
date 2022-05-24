import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Drawer, Button } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
import useCollapseDrawer from '../../../hooks/useCollapseDrawer';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';
import { NavSectionVertical } from '../../../components/nav-section';
//
import navConfig from './NavConfig';
import NavbarAccount from './NavbarAccount';
import NotificationsPopover from '../header/NotificationsPopover'
import LanguagePopover from '../header/LanguagePopover'
import SvgIconStyle from '../../../components/SvgIconStyle'
import useSettings from '../../../hooks/useSettings'
import CollapseButton from './CollapseButton'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({theme}) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

// ----------------------------------------------------------------------

NavbarVertical.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function NavbarVertical({isOpenSidebar, onCloseSidebar}) {
  const theme = useTheme();

  const {pathname} = useLocation();

  const { themeMode, onChangeMode } = useSettings()

  const isDesktop = useResponsive('up', 'lg');

  const {isCollapse, collapseClick, collapseHover, onToggleCollapse, onHoverEnter, onHoverLeave} =
    useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const changeModeHandler = () => {
    const settingMode = themeMode === 'light' ? 'dark' : 'light'
    onChangeMode(settingMode)
  }

  const renderContent = (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
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
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            {isCollapse ? <Logo min /> : <Logo />}
            {!isCollapse && <NotificationsPopover />}
          </Stack>

        </Stack>

        <NavSectionVertical navConfig={navConfig} isCollapse={isCollapse} />
      </Box>

      <Box sx={{ pb: 2 }}>
        <NavbarAccount isCollapse={isCollapse} />
        {!isCollapse && (
          <Box sx={{width: '87%', m: '0 auto', pt: 1, display: 'flex', justifyContent: 'space-between'}}>
            <Button
              onClick={changeModeHandler}
              variant={'outlined'}
              sx={{flexGrow: '0.75', fontSize: '14px'}}
              size="small"
              startIcon={<SvgIconStyle src="/assets/icons/navbar/DarkMode.svg" />}
            >
              Dark Mode
            </Button>
            <LanguagePopover />
          </Box>
        )}
        {isCollapse && (
          <Box sx={{width: '70%', m: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Button
              onClick={changeModeHandler}
              variant={'outlined'}
              size="small"
              sx={{
                width: 40,
                height: 40,
                mb: 2,
              }}
            >
              <SvgIconStyle src="/assets/icons/navbar/DarkMode.svg" />
            </Button>
            <LanguagePopover />
          </Box>
        )}
      </Box>
      {isDesktop && !isCollapse && (<CollapseButton onToggleCollapse={onToggleCollapse}/>)}
    </Box>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH : NAVBAR.DASHBOARD_WIDTH,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      }}
    >
      {!isDesktop && (
        <Drawer open={isOpenSidebar} onClose={onCloseSidebar} PaperProps={{sx: {width: NAVBAR.DASHBOARD_WIDTH}}}>
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: NAVBAR.DASHBOARD_WIDTH,
              borderRightStyle: 'dashed',
              bgcolor: 'background.default',
              transition: (theme) =>
                theme.transitions.create('width', {
                  duration: theme.transitions.duration.standard,
                }),
              ...(isCollapse && {
                width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
              }),
              ...(collapseHover && {
                ...cssStyles(theme).bgBlur(),
                boxShadow: (theme) => theme.customShadows.z24,
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
