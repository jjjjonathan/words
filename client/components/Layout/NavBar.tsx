import React from "react";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import Logo from "./Logo";

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>
          {session?.user?.name && <Box>logged in as {session.user.name}</Box>}
          <Button color="inherit" onClick={() => signOut()}>
            logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
