import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

CollapseButton.propTypes = {
  onToggleCollapse: PropTypes.func,
};

export default function CollapseButton({ onToggleCollapse }) {
  return (
    <Box
      onClick={onToggleCollapse}
      sx={{
        opacity: '0',
        cursor: 'pointer',
        position: 'absolute',
        width: '4px',
        height: '100vh',
        backgroundColor: '#3366FF',
        left: '98.5%',
        '&:hover': {
          'opacity': '1'
        }
      }}
    />
  );
}

