//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
//icons
import logo from "../assets/img/logo.png";

const SingleJob = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "900px",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "70%",
          width: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.main",
        }}
      >
        {/* Lijeva strana */}
        <Box
          sx={{
            width: "40%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: "70%",
              border: "1px solid black",
            }}
          >
            <CardMedia
              component="img"
              height="300px"
              image={logo}
              alt="green iguana"
            />
          </Card>
        </Box>
        {/* Desna strana */}
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "70%",
              width: "90%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{
                fontFamily: "Roboto",
                mt: "1.5rem",
                mb: "1.5rem",
              }}
            >
              {" "}
              Naziv oglasa asdwqew wqdwqdwq{" "}
            </Typography>
            <Box
              sx={{
                height: "95%",
                width: "95%",
              }}
            >
              <Box sx={{ mb: "1.5rem" }}>
                <Typography sx={{ fontWeight: 500 }}>Opis posla:</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ratione similique itaque dolor dolore placeat
                  molestiae quos neque. Ex recusandae accusantium libero rem
                  corrupti excepturi magnam illum temporibus tempore doloremque!
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    pr: 1,
                  }}
                >
                  Plata:{" "}
                </Typography>
                <Typography> 321km</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SingleJob;
