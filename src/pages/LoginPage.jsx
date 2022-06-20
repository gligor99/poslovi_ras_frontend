import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
//MUI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//icons
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../auth/context";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  let navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://ras_poslovi_backend.test/app/login_check", {
          username: username,
          password: password,
        })
        .then((response) => {
          const user = jwtDecode(response.data.token);
          setUser(user);
          setIsLoggedIn(true);
          navigate("/profile");
        });
    } catch (error) {
      if (error.response) {
        setMsg("Lozinka ili email nisu ispravni!");
        setTimeout(() => {
          setMsg("");
        }, "2000");
      }
    }
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        height: "900px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          p: 3,
          height: "700px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "background.main",
          boxShadow: 0,
        }}
      >
        <Box
          sx={{
            p: 5,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            boxShadow: 1,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Prijavite se
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <form onSubmit={login}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email adresa"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Lozinka"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Typography
                sx={{
                  color: "red",
                }}
              >
                {" "}
                {msg}{" "}
              </Typography>
              <Button
                onSubmit={(e) => login()}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Prijava
              </Button>
            </form>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      pr: 1,
                    }}
                  >
                    Nemate nalog?{" "}
                  </Typography>
                  <Link
                    to="/register"
                    variant="body2"
                    style={{
                      textDecoration: "none",
                      color: "red",
                    }}
                  >
                    Registrujte se
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
