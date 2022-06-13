import { Link } from "react-router-dom";

//MUI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
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

const RegisterPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          height: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AppRegistrationIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registracija
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                aria-label="about company"
                minRows={4}
                placeholder="Dodajte opis (opcionalno)"
                style={{
                  width: "70%",
                  outline: "1px solid lightgray",
                  fontSize: "0.8rem",
                  padding: "10px",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      filter: "brightness(80%)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      pr: 1,
                    }}
                  >
                    Dodaj sliku{" "}
                  </Typography>
                  <PhotoCamera sx={{ color: "background.main" }} />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Registruj se
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Imate nalog? Prijavite se.
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
