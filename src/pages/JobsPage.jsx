import { Breadcrumb } from "./../components/index";
//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
//Icons
import GridViewIcon from "@mui/icons-material/GridView";
import ListAltIcon from "@mui/icons-material/ListAlt";

import logo from "./../assets/img/test.png";

const JobsPage = () => {
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
              {" "}
              Poslovi{" "}
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
          >
            <Box sx={{ height: "40px", width: "100px" }}>
              <GridViewIcon
                sx={{
                  color: "primary.main",
                  height: "100%",
                  width: "50%",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
              <ListAltIcon
                sx={{
                  color: "primary.main",
                  height: "100%",
                  width: "50%",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
        {/* Prikaz svih kompanija */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "background.main",
            mt: 5,
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>
          <Grid item xs={5}>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio magni officiis tempora laborum similique deleniti
                      provident distinctio minus nemo rerum?
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
                        height: "20%",
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
            <Grid item xs={5}>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio magni officiis tempora laborum similique deleniti
                      provident distinctio minus nemo rerum?
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
                        height: "20%",
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

export default JobsPage;
