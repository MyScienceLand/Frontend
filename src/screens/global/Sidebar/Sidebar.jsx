import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import '../../../index.scss';

// import "../../../index.scss";
import { Dashboard, FileCopy } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';
import { PurpleLogoWithText } from '../../../assets';
const iconMap = {
  Dashboard: <Dashboard />,
  Content: <FileCopy />,
  Quiz: <CalendarMonthIcon />,
};

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-color)',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-color)',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
//   ...(open && {
//     ...openedMixin(theme),
//     '& .MuiDrawer-paper': openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     '& .MuiDrawer-paper': closedMixin(theme),
//   }),
// }));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': {
      ...openedMixin(theme),
      boxShadow: '1px 0 7px rgba(0, 0, 0, 0.5)',
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': {
      ...closedMixin(theme),
      boxShadow: '1px 0 7px rgba(0, 0, 0, 0.5)',
    },
  }),
}));

export default function Sidebar({ handleDrawerClose, open }) {
  const theme = useTheme();
  const location = useLocation();
  return (
    <Drawer variant="permanent" open={open} className="">
      <DrawerHeader>
        <div
          className={`flex md:flex-col  my-5 me-${open ? 4 : 0} items-center`}
        >
          <img src={PurpleLogoWithText} alt="" width={130} />
          {/* {open && <p className="">MYSCIENCELAND</p>} */}
        </div>

        {open && (
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        )}
      </DrawerHeader>

      <List>
        {['Dashboard', 'Content', 'Quiz'].map((text, index) => {
          const route = text.toLowerCase().replace(' ', '-');
          const isSelected =
            location.pathname === `/${route}` ||
            (text === 'Dashboard' && location.pathname === '/');
          return (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                to={`/${route}`}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: isSelected ? 'var(--secondary-color)' : '',
                  borderTopRightRadius: 18,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: isSelected ? '#fff' : 'var(--text-color)',
                  }}
                >
                  {iconMap[text]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: isSelected ? '#fff' : 'var(--text-color)',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
