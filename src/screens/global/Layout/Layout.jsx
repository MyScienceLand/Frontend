import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useMatch } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import TailwindSidebar from "../TailwindSidebar";
import ContentWrapper from "../ContentWrapper";

const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: 1,
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

export default function Layout({
  display,
  toggleFullScreen,
  isFullScreen,
  children,
}) {
  const match = useMatch("/student-dashboard/primarily-quiz");

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setSidebarOpen(!sidebarOpen); // Toggles the sidebarOpen state
  };
  console.log("🚀 ~ sidebarOpen:", sidebarOpen);

  return (
    // <div className={`${match ? "hidden" : display}`}>
    //   {!isFullScreen && (
    //     <div className="flex flex-col h-screen">
    //       <AppBar position="fixed" open={open}>
    //         <Topbar
    //           handleDrawerOpen={handleDrawerOpen}
    //           open={open}
    //           toggleFullScreen={toggleFullScreen}
    //           isFullScreen={isFullScreen}
    //         />
    //       </AppBar>
    //       <div className="flex-1 flex overflow-hidden">
    //         <ContentWrapper>{children}</ContentWrapper>
    //       </div>
    //     </div>
    //   )}
    //   {/* <ContentWarper open={open} isFullScreen={isFullScreen} /> Todo: add full screen functionality here */}
    // </div>
    <>
      <div
        className={`grid ${
          sidebarOpen ? "grid grid-cols-[100px_1fr]" : "grid-cols-[1.2fr_7fr]"
        }`}
      >
        <div className="">
          <TailwindSidebar
            sidebarOpen={sidebarOpen}
            handleDrawerOpen={handleDrawerOpen}
          />
        </div>
        <div>
          <Topbar
            handleDrawerOpen={handleDrawerOpen} // Passes the function to Topbar
            toggleFullScreen={toggleFullScreen}
            isFullScreen={isFullScreen}
          />
          <ContentWrapper>{children}</ContentWrapper>
        </div>
      </div>
    </>
  );
}
