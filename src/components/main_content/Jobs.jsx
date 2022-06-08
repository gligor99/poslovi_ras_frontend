//MUI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//test img
import logo from "./../../assets/img/logo-wbg (1).png";
const Jobs = () => {
  return (
    <>
      <Container
        sx={{
          width: "80%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "tomato",
            width: "90%",
            height: "70px",
            mb: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            pl: "5px",
            pr: "5px",
            boxShadow: 3,
            borderRadius: "5px",
          }}
        >
          <Card
            sx={{
              height: "90%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#f4f4f4",
              pr: "5px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "90%",
                width: "30%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
              src={logo}
            ></Box>

            <Box
              sx={{
                height: "90%",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                pl: "10px",
                pr: "5px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1rem",
                  color: "black",
                }}
              >
                D.O.O Naziv firme dwqdw
              </Typography>
            </Box>
            <Box
              sx={{
                width: "20%",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mr: "5px",
              }}
            >
              <Button
                size="small"
                sx={{
                  color: "white",
                  backgroundColor: "red",
                  width: "80%",
                  height: "60",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "red",
                    filter: "brightness(70%)",
                  },
                }}
              >
                Detalji
              </Button>
            </Box>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Jobs;
