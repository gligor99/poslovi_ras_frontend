import * as React from "react";
import { NavLink } from "react-router-dom";

// MUI Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import logo from "../assets/img/logo-wbg (1).png";

const pages = [
  { page: "Početna", path: "/" },
  {
    page: "Poslovi",
    path: "/jobs",
  },
  {
    page: "O nama",
    path: "/about",
  },
  {
    page: "Kontakt",
    path: "/contact",
  },
];
const settings = ["Profil", "Odjavi se"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="relative"
      style={{ zIndex: 99, background: "#fff", color: "#000" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <img
              src={logo}
              alt="Poslovi Bijeljina Logo"
              style={{ width: 140 }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((item) => (
                <MenuItem key={item.page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{item.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <img
              src={logo}
              alt="Poslovi Bijeljina Logo"
              style={{ width: 140, marginRight: 20 }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((item) => (
              <Button
                key={item.page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#000", display: "block" }}
              >
                <NavLink
                  to={item.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.page}
                </NavLink>
              </Button>
            ))}
          </Box>

          {/* Button za dodavanje novog oglasa */}

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="outlined" color="error" sx={{ marginRight: 2 }}>
              Dodaj posao
            </Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
