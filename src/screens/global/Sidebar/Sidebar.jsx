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
import {
  closedMixin,
  openedMixin,
} from '../../../utils/helper/HelperFunctions';

// import "../../../index.scss";
import { FileCopy } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FaBuildingColumns } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';

import { Link } from 'react-router-dom';
import { ManagementLogo, PurpleLogoWithText } from '../../../assets';
const iconMap = {
  Dashboard: <FaBuildingColumns size={19} />,
  Content: <FileCopy />,
  Quiz: <CalendarMonthIcon />,
};

const managementIconMap = {
  Dashboard: <FaBuildingColumns size={19} />,
  'Teacher List': <GiTeacher />,
};

const drawerWidth = 240;
let backGroundColor = '';
let textColor = '';
// const route = location.pathname.split('/')[1];

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme, drawerWidth, backGroundColor, textColor),
    '& .MuiDrawer-paper': {
      ...openedMixin(theme, drawerWidth, backGroundColor, textColor),
      boxShadow: '1px 0 7px rgba(0, 0, 0, 0.5)',
    },
  }),
  ...(!open && {
    ...closedMixin(theme, backGroundColor, textColor),
    '& .MuiDrawer-paper': {
      ...closedMixin(theme, backGroundColor, textColor),
      boxShadow: '1px 0 7px rgba(0, 0, 0, 0.5)',
    },
  }),
}));

export default function Sidebar({ handleDrawerClose, open }) {
  // const user = useSelector((state) => state.user);
  const user = { role: 'management' };

  if (user?.role === 'student') {
    backGroundColor = 'var(--primary-color)';
    textColor = 'var(--text-color)';
  } else if (user?.role === 'management') {
    backGroundColor = 'var(--secondary-color)';
    textColor = 'var(--primary-color)';
  }
  console.log(user);
  const theme = useTheme();
  const location = useLocation();
  return (
    <Drawer variant="permanent" open={open} className="">
      <DrawerHeader>
        <div
          className={`flex md:flex-col  my-5 me-${open ? 4 : 0} items-center`}
        >
          <img
            src={
              user?.role === 'student'
                ? PurpleLogoWithText
                : user?.role === 'management'
                ? ManagementLogo
                : ''
            }
            alt=""
            width={130}
          />
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

      {user.role === 'student' ? (
        <List>
          {['Dashboard', 'Content', 'Quiz'].map((text, index) => {
            const route = text.toLowerCase().replace(' ', '-');
            const isSelected =
              location.pathname === `/student-dashboard/${route}` ||
              (text === 'Dashboard' && location.pathname === '/');
            return (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  component={Link}
                  to={`/student-dashboard/${route}`}
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
      ) : (
        <List>
          {['Dashboard', 'Teacher List'].map((text, index) => {
            const route = text.toLowerCase().replace(' ', '-');
            const isSelected =
              location.pathname === `/management-dashboard/${route}` ||
              (text === 'Dashboard' && location.pathname === '/');
            return (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  component={Link}
                  to={`/management-dashboard/${route}`}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    backgroundColor: isSelected ? 'var(--primary-color)' : '',
                    borderTopRightRadius: 18,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: isSelected
                        ? 'var(--secondary-color)'
                        : 'var(--primary-color)',
                    }}
                  >
                    {managementIconMap[text]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: isSelected
                        ? 'var(--secondary-color)'
                        : 'var(--primary-color)',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      )}
    </Drawer>
  );
}
