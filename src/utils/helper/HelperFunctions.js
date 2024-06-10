const handelLogout = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

const openedMixin = (theme, drawerWidth) => ({
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

export { closedMixin, handelLogout, openedMixin };
