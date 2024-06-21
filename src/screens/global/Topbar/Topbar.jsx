import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { VscBellDot } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';
import UserProfile from '../../../components/UserProfile/UserProfile';
import AddPreferences from '../../../components/common/buttons/AddPreferences/AddPreferences';
import './Topbar.scss';

const Topbar = ({ handleDrawerOpen, open, isFullScreen, toggleFullScreen }) => {
  const location = useLocation();
  const route = location.pathname.split('/')[1];

  const token = localStorage.getItem('token');
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
        {route === 'student-dashboard' ? <AddPreferences /> : null}
        {/* <ThemeToggleButton /> */}
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
        {/* <Link to={'/primarily-quiz'}>Open quiz</Link> */}
        <UserProfile />
      </Box>
    </Box>
  );
};

export default Topbar;
