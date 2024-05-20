// import React from "react";
// import { Box, useTheme } from "@mui/material";

// const drawerWidth = 240;

// const ContentWrapper = ({ children, open }) => {
//   const theme = useTheme();

//   return (
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         p: 3,
//         transition: theme.transitions.create("margin", {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: open
//           ? `${drawerWidth}px`
//           : `calc(${theme.spacing(7)} + 1px)`,
//         [theme.breakpoints.up("sm")]: {
//           marginLeft: open
//             ? `${drawerWidth}px`
//             : `calc(${theme.spacing(8)} + 1px)`,
//         },
//       }}
//       mt={5}
//     >
//       {children}
//     </Box>
//   );
// };

// export default ContentWrapper;
// import React from "react";
// import { Box, useTheme } from "@mui/material";

// const drawerWidth = 240;

// const ContentWrapper = ({ children, open }) => {
//   const theme = useTheme();

//   return (
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         p: 3,
//         transition: theme.transitions.create("margin", {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: open
//           ? `${drawerWidth}px`
//           : `calc(${theme.spacing(7)} + 1px)`,
//         [theme.breakpoints.up("sm")]: {
//           marginLeft: open
//             ? `${drawerWidth}px`
//             : `calc(${theme.spacing(8)} + 1px)`,
//         },
//       }}
//       mt={5}
//     >
//       {children}
//     </Box>
//   );
// };

// export default ContentWrapper;
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const drawerWidth = 240;

const ContentWrapper = ({ children, open, isFullScreen }) => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: open
          ? `${drawerWidth}px`
          : `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up("sm")]: {
          marginLeft: open
            ? `${drawerWidth}px`
            : `calc(${theme.spacing(8)} + 1px)`,
        },
      }}
      mt={5}
    >
      {1 && (
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            mt: 2,
          }}
        >
          Press Esc to exit full-screen mode
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default ContentWrapper;
