//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
//components
import { Breadcrumb } from "./../components/index";
//icons
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../assets/img/logo.png";

const SingleJobPage = () => {
  return (
    <>
      <Breadcrumb />

      <Container
        maxWidth="xl"
        sx={{
          height: "850px",
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
            boxShadow: 1,
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
                borderRadius: "10px",
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
                boxShadow: 1,
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
                <Box sx={{ mb: "0.5rem" }}>
                  <Typography sx={{ fontWeight: 500 }}>Opis posla:</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti ratione similique itaque dolor dolore placeat
                    molestiae quos neque. Ex recusandae accusantium libero rem
                    corrupti excepturi magnam illum temporibus tempore
                    doloremque!
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: "0.5rem",
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
                <Box sx={{ mb: "0.5rem" }}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                    }}
                  >
                    Kontakt:
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <PhoneIcon />
                    <Typography
                      sx={{
                        pl: 1,
                      }}
                    >
                      {" "}
                      066 222 333
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ mb: "1.5rem" }}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                    }}
                  >
                    Lokacija:
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <LocationOnIcon />
                    <Typography
                      sx={{
                        pl: 1,
                      }}
                    >
                      Grad, ulica, 33
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SingleJobPage;
