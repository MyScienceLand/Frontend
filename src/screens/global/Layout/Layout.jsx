// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiAppBar from "@mui/material/AppBar";

// import Topbar from "../Topbar/Topbar";
// import Sidebar from "../Sidebar/Sidebar";

// import ContentWarper from "../ContentWarper/ContentWarper";

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
//   ...(!open && {
//     marginLeft: `calc(${theme.spacing(7)} + 1px)`,
//     width: `calc(100% - ${theme.spacing(7)} - 1px)`,
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: `calc(${theme.spacing(8)} + 1px)`,
//       width: `calc(100% - ${theme.spacing(8)} - 1px)`,
//     },
//   }),
// }));

// export default function Layout() {
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <AppBar position="fixed" open={open}>
//         <Topbar handleDrawerOpen={() => handleDrawerOpen()} open={open} />
//       </AppBar>
//       <Sidebar handleDrawerClose={() => handleDrawerClose()} open={open} />
//       <ContentWarper />
//     </Box>
//   );
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";

import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import ContentWarper from "../ContentWarper/ContentWarper";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    width: `calc(100% - ${theme.spacing(7)} - 1px)`,
    [theme.breakpoints.up("sm")]: {
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
}) {
  return (
    <Box sx={{ display: display }}>
      <AppBar position="fixed" open={open}>
        <Topbar handleDrawerOpen={handleDrawerOpen} open={open} />
      </AppBar>
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
      <ContentWarper open={open} />
    </Box>
  );
}