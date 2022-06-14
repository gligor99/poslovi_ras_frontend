import { Breadcrumb } from "./../components/index";
//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
//Icons
import logo from "./../assets/img/test.png";

const CompaniesPage = () => {
  return (
    <>
      <Breadcrumb />
      <Container maxWidth="xl">
        {/* Vrh stranice */}
        <Box
          sx={{
            width: "100%",
            height: "100px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "background.main",
            boxShadow: 1,
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "50%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Roboto",
                fontWeight: "500",
                ml: 5,
              }}
            >
              Kompanije
            </Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "50%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              mr: 5,
            }}
          ></Box>
        </Box>
        {/* Prikaz svih kompanija */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "background.main",
            mt: 5,
            boxShadow: 1,
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>
            <Grid item xs={7}>
              <Card
                sx={{
                  height: "90%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
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
                      width: "80%",
                      height: "80%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    src={logo}
                  ></Box>
                </Box>

                <Box
                  sx={{
                    height: "80%",
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
                      height: "100%",
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
                        pt: 1,
                        mb: 1,
                      }}
                    >
                      D.O.O Naziv firme dwqdw
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        height: "50%",
                        width: "100%",
                        fontFamily: "Roboto",
                      }}
                    >
                      Kratke informacije o firmi Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Natus, assumenda.
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
                        height: "25%",
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
            </Grid>
            <Grid item xs={7}>
              <Card
                sx={{
                  height: "90%",
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
                      width: "80%",
                      height: "80%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    src={logo}
                  ></Box>
                </Box>

                <Box
                  sx={{
                    height: "80%",
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
                      height: "100%",
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
                        pt: 1,
                        mb: 1,
                      }}
                    >
                      D.O.O Naziv firme dwqdw
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        height: "50%",
                        width: "100%",
                        fontFamily: "Roboto",
                      }}
                    >
                      Kratke informacije o firmi Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Natus, assumenda.
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
                        height: "25%",
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
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default CompaniesPage;
