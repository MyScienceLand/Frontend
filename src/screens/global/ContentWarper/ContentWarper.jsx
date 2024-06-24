import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useMatch } from "react-router-dom";

const drawerWidth = 240;

const ContentWrapper = ({ children, open, isFullScreen }) => {
  const theme = useTheme();
  const match = useMatch("/student-dashboard/primarily-quiz");

  return (
    <Box
      component="main"
      sx={{
        // display: 'none',
        flexGrow: 1,
        px: 7,
        py: 6,
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
      {!match && (
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
