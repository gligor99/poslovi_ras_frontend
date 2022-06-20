//MUI imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//test img
import logo from "./../../assets/img/test.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../context/postContext";
const Jobs = () => {
  const navigate = useNavigate();
  const { allPosts } = useContext(PostContext);

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
        {allPosts.data?.map((item) => {
          const { id, title, content, user } = item;
          return (
            <Box
              key={id}
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
                    src={user?.images[0]}
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
                      {content.substring(0, 100)} ...
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
                      <Link
                        style={{ textDecoration: "none", color: "#fff" }}
                        to={`/jobs/${id}`}
                      >
                        {" "}
                        Detalji{" "}
                      </Link>
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Box>
          );
        })}

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
              onClick={() => navigate("/jobs")}
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
