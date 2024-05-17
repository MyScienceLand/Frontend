// import React from "react";
// import { Box } from "@mui/material";

// const ContentWarper = ({ children }) => {
//   return (
//     <Box
//       component="main"
//       sx={{ flexGrow: 1, p: 3 }}
//       marginLeft={"13%"}
//       marginTop={5}
//     >
//       {children}
//     </Box>
//   );
// };

// export default ContentWarper;

import React from "react";
import { Box, useTheme } from "@mui/material";

const drawerWidth = 240;

const ContentWrapper = ({ children, open }) => {
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
      {children}
    </Box>
  );
};

export default ContentWrapper;
