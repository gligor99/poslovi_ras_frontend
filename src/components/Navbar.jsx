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
import MenuItem from "@mui/material/MenuItem";
//Router
import { Link, NavLink, useNavigate } from "react-router-dom";
//Hooks
import { useState } from "react";

import logo from "../assets/img/logo-wbg (1).png";
import { useContext } from "react";
import { AuthContext } from "../auth/context";

const pages = [
  { page: "Početna", path: "/" },
  {
    page: "Poslovi",
    path: "/jobs",
  },
  // {
  //   page: "Kompanije",
  //   path: "/companies",
  // },
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
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, setUser, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
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

  const logout = () => {
    setUser(null), setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <AppBar
      position="relative"
      sx={{
        bgcolor: "#fff",
        color: "#000",
        boxShadow: 1,
      }}
      style={{ zIndex: 99 }}
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
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "link")}
                key={item.page}
                onClick={handleCloseNavMenu}
              >
                {item.page}
              </NavLink>
            ))}
          </Box>

          {/* Button za dodavanje novog oglasa */}
          <Box
            style={{ width: "140px", display: "flex", justifyContent: "end" }}
          >
            {user ? (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar />
                </IconButton>
              </>
            ) : (
              <Button
                size="small"
                sx={{
                  color: "white",
                  backgroundColor: "primary.main",
                  width: "80%",
                  height: "20%",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "primary.main",
                    filter: "brightness(70%)",
                  },
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  to="/login"
                >
                  Login
                </Link>
              </Button>
            )}

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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <NavLink
                    style={{
                      color: "black",
                      textDecoration: "none",
                      textTransform: "uppercase",
                      fontWeight: "500",
                      fontSize: "0.9rem",
                    }}
                    to="profile"
                  >
                    Profil
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: "500",
                    fontSize: "0.9rem",
                  }}
                  onClick={() => logout()}
                >
                  Izloguj se
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
