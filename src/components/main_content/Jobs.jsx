//MUI imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//test img
import logo from "./../../assets/img/test.png";
const Jobs = () => {
  return (
    <>
      <Box
        sx={{
          width: "55%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Naslov */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            mb: 2,
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "400",
              color: "black",
              fontSize: "1.2rem",
              pt: 1,
              pb: 1,
            }}
          >
            Aktivni oglasi za posao
          </Typography>
        </Box>

        {/* Oglasi */}
        <Box
          sx={{
            width: "100%",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pl: "3px",
            pr: "3px",
            mb: 2,
            borderRadius: "5px",
          }}
        >
          <Card
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              bgcolor: "white",
              pr: "5px",
              boxShadow: 1,
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "30%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "min-content",
                  width: "80%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                src={logo}
              ></Box>
            </Box>

            <Box
              sx={{
                height: "100%",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                pl: "10px",
                pr: "5px",
              }}
            >
              <Box
                sx={{
                  height: "80%",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    height: "20%",
                    width: "100%",
                    fontSize: "1rem",
                    fontFamily: "Roboto",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  D.O.O Naziv firme dwqdw
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    height: "80%",
                    width: "100%",
                    fontFamily: "Roboto",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  magni officiis tempora laborum similique deleniti provident
                  distinctio minus nemo rerum?
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: "100%",
                width: "20%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "80%",
                  width: "95%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Button
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "primary.main",
                    width: "80%",
                    height: "15%",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "primary.main",
                      filter: "brightness(70%)",
                    },
                  }}
                >
                  Detalji
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pl: "3px",
            pr: "3px",
            mb: 1,
            borderRadius: "5px",
          }}
        >
          <Card
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              bgcolor: "white",
              pr: "5px",
              boxShadow: 1,
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "30%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "min-content",
                  width: "80%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                src={logo}
              ></Box>
            </Box>

            <Box
              sx={{
                height: "100%",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "80%",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    height: "20%",
                    width: "100%",
                    fontSize: "1rem",
                    fontFamily: "Roboto",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  D.O.O Naziv firme dwqdw
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    height: "80%",
                    width: "100%",
                    fontFamily: "Roboto",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  magni officiis tempora laborum similique deleniti provident
                  distinctio minus nemo rerum?
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: "100%",
                width: "20%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "80%",
                  width: "95%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Button
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "primary.main",
                    width: "80%",
                    height: "15%",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "primary.main",
                      filter: "brightness(70%)",
                    },
                  }}
                >
                  Detalji
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>

        {/* Dugme za prikaz svih oglasa */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            mt: 1,
          }}
        >
          <Box
            sx={{
              width: "25%",
              mb: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "secondary.main",
              borderRadius: "5px",
            }}
          >
            <Button
              sx={{
                width: "100%",
                color: "white",
                fontSize: "1rem",
                fontWeight: "400",
                textTransform: "Capitalize",
                height: "30px",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  filter: "brightness(70%)",
                },
              }}
            >
              Prikaži sve
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Jobs;
