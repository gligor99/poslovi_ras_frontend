//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
//Icons
import ErrorIcon from "@mui/icons-material/Error";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
//Router
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 900,
        }}
      >
        <Box
          sx={{
            height: "50px",
            width: "100%",
            mb: 20,
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate(-1)}
            sx={{
              width: "140px",
              height: "100%",
              bgcolor: "primary.main",
              padding: "6px 0px 6px 0px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                bgcolor: "primary.main",
                filter: "brightness(90%)",
              },
            }}
          >
            <ArrowBackIcon
              sx={{
                fontSize: "2rem",
                width: "30%",
                color: "white",
              }}
            />
            <Typography
              sx={{
                fontSize: "1.5rem",
                width: "65%",
                height: "100%",
                textTransform: "Capitalize",
                color: "white",
              }}
            >
              Nazad
            </Typography>
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
            width: "70%",
            backgroundColor: "background.main",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "90%",
              width: "95%",
              bgcolor: "white",
              boxShadow: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ErrorIcon
                sx={{
                  color: "red",
                  fontSize: "5rem",
                }}
              />
              <Typography variant="h4">Greška 404!</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                width: "70%",
                mt: 2,
              }}
            >
              <Alert variant="filled" severity="error">
                Greška 404, stranica nije pronađena!
              </Alert>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ErrorPage;
