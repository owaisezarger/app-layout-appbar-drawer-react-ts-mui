import React from "react";
import { AppBar, IconButton, Toolbar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarItems from "./NavbarItems";

interface MobileNavbarProps {
  isOpen: boolean;
  onToggleDrawer: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  onToggleDrawer,
  isOpen,
}) => {
  const handleToggle = () => {
    onToggleDrawer();
  };

  return (
    <AppBar
      sx={{
        bgcolor: "#EED3D9",
        position: { xs: "relative", sm: "sticky" },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleToggle} size="large" disableRipple>
            <MenuIcon />
          </IconButton>
          <Box>
            <NavbarItems isOpen={isOpen} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MobileNavbar;
