const handelLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

const openedMixin = (theme, drawerWidth, backGroundColor, textColor) => ({
  width: drawerWidth,
  backgroundColor: backGroundColor,
  color: textColor,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme, backGroundColor, textColor) => ({
  backgroundColor: backGroundColor,
  color: textColor,
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

const setColor = (value) => {
  if (value > 69 && value < 101) {
    return '#3AC55E';
  } else if (value > 49 && value < 70) {
    return '#EAB309';
  } else if (value < 50) {
    return '#EF4444';
  }
};

const setColorAndBackgroundColors = (value) => {
  if (value > 69 && value < 101) {
    return 'text-[#54B17E] bg-[#DDFAEA]';
  } else if (value < 50) {
    return 'text-[#CD5E5E] bg-[#FFEAEA]';
  }
};
export {
  closedMixin,
  handelLogout,
  openedMixin,
  setColor,
  setColorAndBackgroundColors,
};
