//react
import { useState } from "react";
//router
import { Link, useNavigate } from "react-router-dom";
//MUI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
//icons
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
//forms
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();
  // console.log(formData);

  let formData = new FormData();
  formData.set("name", "Pass");
  formData.append("password", "123456");
  formData.append("email", "pass@gmail.com");
  formData.append("description", "Radi valjda sad");
  formData.append("roles", {});

  const register = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "http://ras_poslovi_backend.test/app/user",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
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
            <AppRegistrationIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registracija
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <form onSubmit={register}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="companyName"
                    required
                    fullWidth
                    id="companyName"
                    label="Naziv kompanije"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email adresa"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Lozinka"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    aria-label="about company"
                    minRows={4}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Dodajte opis (opcionalno)"
                    style={{
                      width: "70%",
                      outline: "1px solid lightgray",
                      fontSize: "0.8rem",
                      padding: "10px",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    paddingTop: "0.3rem",
                    paddingBottom: "0.3rem",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        pr: 1,
                      }}
                    >
                      {" "}
                      Dodaj sliku
                    </Typography>
                    <label htmlFor="icon-button-file">
                      <Input
                        sx={{
                          display: "none",
                        }}
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        sx={{
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        <PhotoCamera
                          sx={{
                            height: "30px",
                            width: "30px",
                          }}
                        />
                      </IconButton>
                    </label>
                  </Stack>
                </Grid>
              </Grid>
              <Button
                type="submit"
                onSubmit={(e) => register(e)}
                fullWidth
                variant="contained"
                sx={{ mb: 2 }}
              >
                Registruj se
              </Button>
              <Grid container justifyContent="flex-end">
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
                      {" "}
                      Imate nalog?{" "}
                    </Typography>
                    <Link
                      to="/login"
                      variant="body2"
                      style={{
                        textDecoration: "none",
                        color: "red",
                      }}
                    >
                      Prijavite se.
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
