import React from "react";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import Logo from "./Logo";

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Logo />
        </Box>
        <Button color="inherit">login</Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
