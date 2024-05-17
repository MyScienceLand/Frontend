import { Box, IconButton } from "@mui/material";

import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ThemeToggleButton from "../../../components/buttons/ThemeToggleButton/ThemeToggleButton";
import "./Topbar.scss";
const Topbar = ({ handleDrawerOpen, open }) => {
  return (
    <Box display="flex" justifyContent="space-between" p={2} className="topbar">
      {/* SEARCH BAR */}

      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={() => handleDrawerOpen()}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
            color: "black",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {/* ICONS */}
      <Box display="flex">
        <ThemeToggleButton />
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
