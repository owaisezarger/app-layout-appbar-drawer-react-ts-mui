import React from "react";
import { AppBar, IconButton, Toolbar, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarItems from "./NavbarItems";

interface NavbarProps {
  isOpen: boolean;
  onToggleDrawer: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleDrawer, isOpen }) => {
  const handleToggle = () => {
    onToggleDrawer();
  };

  return (
    <AppBar
      sx={{
        bgcolor: "#FBF9F1",
        position: "sticky",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleToggle} size="large" disableRipple>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="slategray" fontWeight="bold">
            Appbar
          </Typography>
        </Box>

        <Box>
          <NavbarItems isOpen={isOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
