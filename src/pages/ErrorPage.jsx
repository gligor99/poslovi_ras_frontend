//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
              height: "100%",
              bgcolor: "#f4f4f4",
              "&:hover": {
                bgcolor: "#f4f4f4 ",
                filter: "brightness(90%)",
              },
            }}
          >
            <ArrowBackIcon
              sx={{
                fontSize: "2.5rem",
                color: "black",
              }}
            />
            <Typography
              sx={{
                fontSize: "1.5rem",
                height: "100%",
                textTransform: "Capitalize",
                color: "black",
              }}
            >
              {" "}
              Nazad
            </Typography>
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "50%",
            width: "70%",
            bgcolor: "#f4f4f4",
            boxShadow: 3,
          }}
        >
          <Box>
            <ErrorIcon
              sx={{
                color: "red",
                fontSize: "5rem",
              }}
            />
            <Typography variant="h4">Error!</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              width: "80%",
            }}
          >
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              ducimus obcaecati! Officiis ab fugit nisi.Lorem ipsum dolor sit
              amet consectetur adipisicing. Lorem, ipsum dolor.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ErrorPage;
