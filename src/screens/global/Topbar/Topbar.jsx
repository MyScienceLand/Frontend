import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import { alpha, styled } from '@mui/material/styles';
import { VscBellDot } from 'react-icons/vsc';
import ThemeToggleButton from '../../../components/ThemeToggleButton/ThemeToggleButton';
import UserProfile from '../../../components/UserProfile/UserProfile';
import AddPreferences from '../../../components/common/buttons/AddPreferences/AddPreferences';
import './Topbar.scss';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  // borderRadius: theme.shape.borderRadius,
  border: '1px solid var(--accent-color)',
  borderRadius: 25,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const Topbar = ({ handleDrawerOpen, open, isFullScreen, toggleFullScreen }) => {
  return (
    <Box display="flex" justifyContent="space-between" p={2} className="topbar">
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={() => handleDrawerOpen()}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
            color: 'var(--accent-color)',
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Box display="flex " sx={{ alignItems: 'center', gap: 2 }}>
        <AddPreferences />
        <ThemeToggleButton />
        <IconButton onClick={toggleFullScreen}>
          {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </IconButton>
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <VscBellDot className="h-6 w-6" aria-hidden="true" />
        </button>

        <UserProfile />
      </Box>
    </Box>
  );
};

export default Topbar;
