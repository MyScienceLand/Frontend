import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useMatch } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    width: `calc(100% - ${theme.spacing(7)} - 1px)`,
    [theme.breakpoints.up('sm')]: {
      marginLeft: `calc(${theme.spacing(8)} + 1px)`,
      width: `calc(100% - ${theme.spacing(8)} - 1px)`,
    },
  }),
}));

export default function Layout({
  handleDrawerOpen,
  handleDrawerClose,
  open,
  display,
  toggleFullScreen,
  isFullScreen,
}) {
  const match = useMatch('/student-dashboard/primarily-quiz');

  return (
    <div className={`${match ? 'hidden' : display}`}>
      {!isFullScreen && (
        <>
          <AppBar position="fixed" open={open}>
            <Topbar
              handleDrawerOpen={handleDrawerOpen}
              open={open}
              toggleFullScreen={toggleFullScreen}
              isFullScreen={isFullScreen}
            />
          </AppBar>
          {/* <div > */}
          <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
          {/* </div> */}
        </>
      )}
      {/* <ContentWarper open={open} isFullScreen={isFullScreen} /> Todo: add full screen functionality here*/}
    </div>
  );
}
