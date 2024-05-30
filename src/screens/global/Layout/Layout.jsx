import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import ContentWarper from '../ContentWarper/ContentWarper';
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
  return (
    <Box sx={{ display: display }}>
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
      <ContentWarper open={open} isFullScreen={isFullScreen} />
    </Box>
  );
}
