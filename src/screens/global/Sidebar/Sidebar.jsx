import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import MuiDrawer from '@mui/material/Drawer';
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

import { MdFileCopy } from 'react-icons/md';

import { FaRegCalendarAlt } from 'react-icons/fa';

import { FaBuildingColumns } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import { PiStudent } from 'react-icons/pi';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ManagementLogo, PurpleLogoWithText } from '../../../assets';
const iconMap = {
  Dashboard: <FaBuildingColumns size={19} />,
  Content: <MdFileCopy />,
  Quiz: <FaRegCalendarAlt />,
};

const managementIconMap = {
  Dashboard: <FaBuildingColumns size={19} />,
  'Teachers List': <GiTeacher />,
  'Students List': <PiStudent />,
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
  const user = useSelector((state) => state.user);
  // const user = { role: 'management' };
  console.log('sidebar role', user?.role);

  if (user?.role === 'student') {
    backGroundColor = 'white';
    textColor = 'secondary';
  } else if (user?.role === 'management') {
    backGroundColor = 'primary';
    textColor = 'white';
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
          <button onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <IoIosArrowForward color="#000" />
            ) : (
              <IoIosArrowBack color="#000" />
            )}
          </button>
        )}
      </DrawerHeader>

      {user?.role === 'student' ? (
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
                    backgroundColor: isSelected ? 'white' : '',
                    borderTopRightRadius: 18,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: isSelected ? '#fff' : 'secondary',
                    }}
                  >
                    {iconMap[text]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: isSelected ? '#fff' : 'secondary',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <List>
          {['Dashboard', 'Teachers List', 'Students List'].map(
            (text, index) => {
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
                      backgroundColor: isSelected ? 'white' : '',
                      borderTopRightRadius: 18,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: isSelected ? 'primary' : 'white',
                      }}
                    >
                      {managementIconMap[text]}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: isSelected ? 'primary' : 'white', // Set text color to purple
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            }
          )}
        </List>
      )}
    </Drawer>
  );
}
