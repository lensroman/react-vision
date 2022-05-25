import PropTypes from 'prop-types';
// mui
import { alpha, styled } from '@mui/material/styles'
import { ListItem, ListItemText } from '@mui/material'
// icons
import SvgIconStyle from '../SvgIconStyle'
// config
import { NAVBAR } from '../../config'

Folder.propTypes = {
  folderName: PropTypes.string,
  folderSelect: PropTypes.func,
  selected: PropTypes.bool,
}

const FolderListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'selected',
})(({theme, selected}) => ({
  ...theme.typography.body2,
  cursor: 'pointer',
  userSelect: 'none',
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(1.5),
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
  },
  ...(selected && {
    ...theme.typography.subtitle2,
    backgroundColor: alpha(theme.palette.warning.main, theme.palette.action.selectedOpacity),
  }),
}))

export default function Folder({folderName, folderSelect, selected}) {
  return (
    <FolderListItem onClick={folderSelect} selected={selected}>
      <SvgIconStyle src="/assets/icons/folders/Folder.svg" sx={{ mr: '16px' }} />
      <ListItemText
        disableTypography
        primary={folderName}
      />
    </FolderListItem>
  );
}


