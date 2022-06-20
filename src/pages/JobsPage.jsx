import { Breadcrumb } from "./../components/index";
import { useContext } from "react";
import { PostContext } from "../context/postContext";
//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const JobsPage = () => {
  const { allPosts } = useContext(PostContext);
  console.log(allPosts);

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
          ></Box>
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
            {allPosts.data?.map((post) => {
              const { id, title, content, user } = post;
              return (
                <Grid item xs={5} key={id}>
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
                        src={user.images[0]}
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
                            mb: 2,
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="p"
                          sx={{
                            height: "80%",
                            width: "100%",
                            fontFamily: "Roboto",
                          }}
                        >
                          {content.substring(0, 70)}...
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
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default JobsPage;
