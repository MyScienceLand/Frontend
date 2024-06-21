// src/App.js

import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { ThemeContext } from "../../theme/ThemeContext";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      {/* <Button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </Button> */}

      <IconButton onClick={toggleTheme}>
        {theme === "light" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
    </div>
  );
};

export default ThemeToggleButton;
