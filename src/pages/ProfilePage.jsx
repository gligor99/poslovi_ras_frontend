//MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//icons
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { AuthContext } from "../auth/context";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.main",
          boxShadow: 1,
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Lijeva strana  */}
          <Box
            sx={{
              height: "80%",
              width: "55%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontFamily: "Roboto",
                  mt: 3,
                }}
              >
                Firma
              </Typography>
              <Box
                sx={{
                  padding: 2,
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "Roboto",
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima consequatur nobis quasi. Laborum illo reprehenderit
                  omnis ratione perferendis. Rerum corrupti laudantium dicta
                  quidem hic debitis repellat nesciunt, provident eos
                  reprehenderit.
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Desna strana  */}
          <Box
            sx={{
              height: "80%",
              width: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center ",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
              alt="The house from the offer."
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
          </Box>
        </Box>
      </Box>
      {/* Glavni sadrzaj */}
      <Box
        sx={{
          height: "50px",
          width: "100%",
          mt: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "background.main",
          boxShadow: 1,
        }}
      >
        <Typography
          align="left"
          sx={{
            fontFamily: "Roboto",
            pl: 3,
          }}
        >
          Broj vaših oglasa: 3
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              pr: 1,
            }}
          >
            Dodaj oglas
          </Typography>
          <Button
            sx={{
              height: "35px",
              width: "50px",
              backgroundColor: "primary.main",
              color: "white",
              mr: 3,
              "&:hover": {
                backgroundColor: "primary.main",
                filter: "brightness(80%)",
              },
            }}
          >
            <AddIcon
              sx={{
                height: "100%",
                width: "100%",
              }}
            />
          </Button>
        </Box>
      </Box>
      {/* Kontejner za oglase */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.main",
          mt: 1,
        }}
      >
        {/* Oglas */}
        <Box
          sx={{
            height: "90%",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            boxShadow: 1,
            mt: 3,
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "90%",
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
                  mb: "1rem",
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
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      mb: "0.5rem",
                      display: "flex",
                      flexDirection: "column",
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
                        textAlign: "center",
                      }}
                    >
                      Kontakt:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
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
                        textAlign: "center",
                      }}
                    >
                      Lokacija:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
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
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;
